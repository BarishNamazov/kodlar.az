import { readFileSync, readdirSync } from "node:fs";
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

function findUnlinkedUsages(
  plainText: string,
  entries: SearchEntry[],
  file: string,
): UnlinkedUsage[] {
  const errors: UnlinkedUsage[] = [];
  const lines = plainText.split("\n");

  for (const entry of entries) {
    const regex = makeTermRegex(entry.term);
    const m = regex.exec(plainText);
    if (!m) continue;

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

  return errors;
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

// ── Main ─────────────────────────────────────────────────────────────

const blogDir = resolve(import.meta.dirname!, "../src/content/blog");
const files = readdirSync(blogDir).filter((f) => f.endsWith(".md"));
const searchEntries = buildSearchEntries();

let allErrors: UnlinkedUsage[] = [];
let allWarnings: AliasWarning[] = [];

for (const file of files) {
  const content = readFileSync(join(blogDir, file), "utf-8");
  const body = stripFrontmatter(content);
  const noCode = stripCodeBlocks(body);
  const linkedTerms = extractLinkedTerms(noCode);
  const plainText = stripNonProse(stripLinkedTerms(noCode));

  allErrors.push(...findUnlinkedUsages(plainText, searchEntries, file));
  allWarnings.push(...findAliasOnlyUsage(linkedTerms, file));
}

// ── Output ───────────────────────────────────────────────────────────

const yellow = "\x1b[33m";
const red = "\x1b[31m";
const green = "\x1b[32m";
const dim = "\x1b[2m";
const reset = "\x1b[0m";

for (const w of allWarnings) {
  console.log(
    `${yellow}WARN${reset}   ${w.file} — alias [[${w.alias}]] is used but main term [[${w.mainTerm}]] is never linked`,
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
