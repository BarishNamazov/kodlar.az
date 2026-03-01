import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, basename, resolve } from "node:path";
import { glossary, normalize, type GlossaryTerm } from "../src/data/glossary.ts";

const GLOSSARY_LINK = /\[\[([^\]]+)\]\]/g;

// ── Helpers ──────────────────────────────────────────────────────────

function stripFrontmatter(content: string): string {
  const m = content.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/);
  return m ? content.slice(m[0].length) : content;
}

function stripCodeBlocks(body: string): string {
  // fenced code blocks
  let result = body.replace(/^(`{3,})[^\n]*\n[\s\S]*?\n\1\s*$/gm, "");
  // inline code
  result = result.replace(/`[^`]+`/g, "");
  return result;
}

function stripNonProse(body: string): string {
  // markdown links like [label](url)
  let result = body.replace(/\[[^\]]+\]\([^)]+\)/g, "");
  // html/jsx quoted attributes (e.g. alt="perfokart")
  result = result.replace(/\b[\w:-]+=(?:"[^"]*"|'[^']*')/g, "");
  return result;
}

function extractLinkedTerms(body: string): Set<string> {
  const linked = new Set<string>();
  let m: RegExpExecArray | null;
  GLOSSARY_LINK.lastIndex = 0;
  while ((m = GLOSSARY_LINK.exec(body)) !== null) {
    linked.add(normalize(m[1]));
  }
  return linked;
}

function stripLinkedTerms(body: string): string {
  // Remove [[term]] and any immediately following Unicode letters (az suffixes)
  return body.replace(/\[\[[^\]]+\]\][\p{L}]*/gu, "");
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// ── Search entries ───────────────────────────────────────────────────

interface SearchEntry {
  term: string;
  glossaryTerm: GlossaryTerm;
}

function buildSearchEntries(): SearchEntry[] {
  const entries: SearchEntry[] = [];
  for (const g of glossary) {
    entries.push({ term: g.az, glossaryTerm: g });
    for (const alias of g.aliases ?? []) {
      entries.push({ term: alias, glossaryTerm: g });
    }
  }
  // longest first — multi-word terms before their substrings
  entries.sort((a, b) => b.term.length - a.term.length);
  return entries;
}

function makeTermRegex(term: string): RegExp {
  const isAcronym = /^[A-Z]{2,}$/.test(term);
  const escaped = escapeRegex(term);
  // allow flexible whitespace/hyphens inside multi-word terms
  const pattern = escaped.replace(/[-\s]+/g, "[-\\s]+");

  const start = "(?<![\\p{L}\\p{N}])";
  const end = isAcronym ? "(?![\\p{L}\\p{N}])" : "";
  const flags = isAcronym ? "gu" : "giu";

  return new RegExp(`${start}${pattern}${end}`, flags);
}

// ── Checks ───────────────────────────────────────────────────────────

interface UnlinkedUsage {
  file: string;
  term: string;
  mainTerm: string;
  line: number;
  context: string;
}

interface FirstInstanceWarning {
  file: string;
  term: string;
  mainTerm: string;
  line: number;
  context: string;
}

function findUnlinkedUsages(
  plainText: string,
  rawBody: string,
  entries: SearchEntry[],
  linkedTerms: Set<string>,
  file: string,
): { errors: UnlinkedUsage[]; firstInstanceWarnings: FirstInstanceWarning[] } {
  const errors: UnlinkedUsage[] = [];
  const firstInstanceWarnings: FirstInstanceWarning[] = [];
  const lines = plainText.split("\n");

  for (const entry of entries) {
    const regex = makeTermRegex(entry.term);
    const m = regex.exec(plainText);
    if (!m) continue;

    // Check if this term (or any alias / main term of the same glossary entry)
    // is already linked at least once in this file.
    const g = entry.glossaryTerm;
    const isLinked =
      linkedTerms.has(normalize(g.az)) ||
      (g.aliases ?? []).some((a) => linkedTerms.has(normalize(a)));

    if (isLinked) {
      // Term is linked elsewhere — check if the first plain-text occurrence
      // appears before the first [[...]] link for this term in the raw body.
      const firstLinkedPos = findFirstLinkedPosition(rawBody, g);
      const firstUnlinkedPos = m.index;
      // Compare positions in the raw body (approximate: use line number)
      const lineNum = plainText.slice(0, firstUnlinkedPos).split("\n").length;
      if (firstLinkedPos !== -1) {
        const linkedLineNum = rawBody.slice(0, firstLinkedPos).split("\n").length;
        if (lineNum < linkedLineNum) {
          firstInstanceWarnings.push({
            file,
            term: entry.term,
            mainTerm: g.az,
            line: lineNum,
            context: lines[lineNum - 1]?.trim() ?? "",
          });
        }
      }
      // Either way, not an error — term is linked at least once
      continue;
    }

    const linesBefore = plainText.slice(0, m.index).split("\n");
    const lineNum = linesBefore.length;
    errors.push({
      file,
      term: entry.term,
      mainTerm: entry.glossaryTerm.az,
      line: lineNum,
      context: lines[lineNum - 1]?.trim() ?? "",
    });
  }

  return { errors, firstInstanceWarnings };
}

function findFirstLinkedPosition(rawBody: string, g: GlossaryTerm): number {
  const allForms = [g.az, ...(g.aliases ?? [])];
  let earliest = -1;
  for (const form of allForms) {
    const regex = new RegExp(
      `\\[\\[${escapeRegex(form)}\\]\\]`,
      "iu",
    );
    const m = regex.exec(rawBody);
    if (m && (earliest === -1 || m.index < earliest)) {
      earliest = m.index;
    }
  }
  return earliest;
}

interface AliasWarning {
  file: string;
  alias: string;
  mainTerm: string;
}

function findAliasOnlyUsage(
  linkedTerms: Set<string>,
  file: string,
): AliasWarning[] {
  const warnings: AliasWarning[] = [];

  for (const g of glossary) {
    if (!g.aliases?.length) continue;
    const mainLinked = linkedTerms.has(normalize(g.az));
    if (mainLinked) continue;

    for (const alias of g.aliases) {
      if (linkedTerms.has(normalize(alias))) {
        warnings.push({ file, alias, mainTerm: g.az });
      }
    }
  }

  return warnings;
}

// ── Duplicate-link check ─────────────────────────────────────────────

interface DuplicateLinkWarning {
  file: string;
  term: string;
  count: number;
  lines: number[];
}

function findDuplicateLinks(
  body: string,
  file: string,
): DuplicateLinkWarning[] {
  const warnings: DuplicateLinkWarning[] = [];

  // Count [[...]] occurrences grouped by normalized glossary term
  const counts = new Map<string, { term: string; lines: number[] }>();
  let m: RegExpExecArray | null;
  const re = /\[\[([^\]]+)\]\]/g;
  while ((m = re.exec(body)) !== null) {
    const raw = m[1];
    const norm = normalize(raw);
    // Only care about terms that are in the glossary
    const g = glossary.find(
      (g) =>
        normalize(g.az) === norm ||
        (g.aliases ?? []).some((a) => normalize(a) === norm),
    );
    if (!g) continue;

    const key = normalize(g.az);
    const entry = counts.get(key) ?? { term: g.az, lines: [] };
    const lineNum = body.slice(0, m.index).split("\n").length;
    entry.lines.push(lineNum);
    counts.set(key, entry);
  }

  for (const [, entry] of counts) {
    if (entry.lines.length > 1) {
      warnings.push({
        file,
        term: entry.term,
        count: entry.lines.length,
        lines: entry.lines,
      });
    }
  }

  return warnings;
}

function fixDuplicateLinks(filePath: string): number {
  const content = readFileSync(filePath, "utf-8");
  const frontmatterMatch = content.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/);
  const prefix = frontmatterMatch ? frontmatterMatch[0] : "";
  const body = frontmatterMatch ? content.slice(prefix.length) : content;

  // Track which glossary terms we've already seen (by normalized main term key)
  const seen = new Set<string>();
  let fixed = 0;

  const result = body.replace(/\[\[([^\]]+)\]\]/g, (match, term) => {
    const norm = normalize(term);
    const g = glossary.find(
      (g) =>
        normalize(g.az) === norm ||
        (g.aliases ?? []).some((a) => normalize(a) === norm),
    );
    if (!g) return match; // not a glossary term, leave as-is

    const key = normalize(g.az);
    if (seen.has(key)) {
      fixed++;
      return term; // strip the [[ ]]
    }
    seen.add(key);
    return match; // keep the first occurrence
  });

  if (fixed > 0) {
    writeFileSync(filePath, prefix + result);
  }
  return fixed;
}

// ── Main ─────────────────────────────────────────────────────────────

const checkDuplicates = process.argv.includes("--check-duplicates");
const fixDuplicates = process.argv.includes("--fix-duplicates");

const blogDir = resolve(import.meta.dirname!, "../src/content/blog");
const files = readdirSync(blogDir).filter((f) => f.endsWith(".md"));
const searchEntries = buildSearchEntries();

let allErrors: UnlinkedUsage[] = [];
let allWarnings: AliasWarning[] = [];
let allFirstInstanceWarnings: FirstInstanceWarning[] = [];
let allDuplicateWarnings: DuplicateLinkWarning[] = [];

for (const file of files) {
  const content = readFileSync(join(blogDir, file), "utf-8");
  const body = stripFrontmatter(content);
  const noCode = stripCodeBlocks(body);
  const linkedTerms = extractLinkedTerms(noCode);
  const plainText = stripNonProse(stripLinkedTerms(noCode));

  const { errors, firstInstanceWarnings } = findUnlinkedUsages(
    plainText, noCode, searchEntries, linkedTerms, file,
  );
  allErrors.push(...errors);
  allFirstInstanceWarnings.push(...firstInstanceWarnings);
  allWarnings.push(...findAliasOnlyUsage(linkedTerms, file));
  if (checkDuplicates || fixDuplicates) {
    allDuplicateWarnings.push(...findDuplicateLinks(noCode, file));
  }
}

// ── Output helpers ───────────────────────────────────────────────────

const yellow = "\x1b[33m";
const red = "\x1b[31m";
const green = "\x1b[32m";
const dim = "\x1b[2m";
const reset = "\x1b[0m";

// ── Fix duplicates ──────────────────────────────────────────────────

if (fixDuplicates && allDuplicateWarnings.length > 0) {
  const filesWithDups = new Set(allDuplicateWarnings.map((w) => w.file));
  let totalFixed = 0;
  for (const file of filesWithDups) {
    const fixed = fixDuplicateLinks(join(blogDir, file));
    if (fixed > 0) {
      console.log(
        `${green}FIXED${reset}  ${file} — removed ${fixed} duplicate link(s)`,
      );
      totalFixed += fixed;
    }
  }
  console.log(
    `\n${green}Fixed ${totalFixed} duplicate link(s) across ${filesWithDups.size} file(s).${reset}`,
  );
  // Skip printing duplicate warnings since we just fixed them
  allDuplicateWarnings = [];
}

// ── Output ───────────────────────────────────────────────────────────

for (const w of allWarnings) {
  console.log(
    `${yellow}WARN${reset}   ${w.file} — alias [[${w.alias}]] is used but main term [[${w.mainTerm}]] is never linked`,
  );
}

for (const w of allFirstInstanceWarnings) {
  console.log(
    `${yellow}WARN${reset}   ${w.file}:${w.line} — "${w.term}" first appears unlinked (linked later); consider linking the first occurrence`,
  );
  console.log(`${dim}       > ${w.context}${reset}`);
}

for (const w of allDuplicateWarnings) {
  console.log(
    `${yellow}WARN${reset}   ${w.file} — [[${w.term}]] is linked ${w.count} times (lines ${w.lines.join(", ")}); only the first occurrence needs [[...]]`,
  );
}

if (allErrors.length > 0) {
  console.log("");
  for (const e of allErrors) {
    const termLabel = e.term === e.mainTerm ? e.term : `${e.term} → ${e.mainTerm}`;
    console.error(
      `${red}ERROR${reset}  ${e.file}:${e.line} — "${termLabel}" appears without [[...]] linking`,
    );
    console.error(`${dim}       > ${e.context}${reset}`);
  }

  console.error(
    `\n${red}${allErrors.length} unlinked glossary term(s) found.${reset} Wrap them in [[...]] or remove them.`,
  );
  process.exit(1);
}

console.log(
  `\n${green}Glossary check passed.${reset} (${files.length} files, ${searchEntries.length} terms checked)`,
);
