import type { Root, Text, Html, Parent, PhrasingContent } from "mdast";
import type { Plugin } from "unified";
import { lookupTerm, type GlossaryTerm } from "../data/glossary.ts";

const GLOSSARY_PATTERN = /\[\[([^\]]+)\]\]/g;

function visitTextNodes(
  node: Root | Parent,
  handler: (node: Text, index: number, parent: Parent) => void,
) {
  if (!node.children) return;
  for (let i = node.children.length - 1; i >= 0; i--) {
    const child = node.children[i];
    if (child.type === "text") {
      handler(child as Text, i, node);
    } else if ("children" in child) {
      visitTextNodes(child as Parent, handler);
    }
  }
}

const remarkGlossary: Plugin<[], Root> = () => {
  return (tree: Root) => {
    const usedTerms = new Map<string, GlossaryTerm>();
    const missingTerms = new Set<string>();

    visitTextNodes(tree, (node, index, parent) => {
      const text = node.value;
      if (!text.includes("[[")) return;

      const children: (Text | Html)[] = [];
      let lastIndex = 0;
      let match: RegExpExecArray | null;

      GLOSSARY_PATTERN.lastIndex = 0;
      while ((match = GLOSSARY_PATTERN.exec(text)) !== null) {
        if (match.index > lastIndex) {
          children.push({
            type: "text",
            value: text.slice(lastIndex, match.index),
          });
        }

        const termKey = match[1];
        const term = lookupTerm(termKey);

        if (term) {
          // Preserve the original casing from the markdown source
          const displayText = termKey;

          const attrs: Record<string, string> = {
            "data-term-az": term.az,
            "data-term-en": term.en,
          };
          if (term.description) attrs["data-term-desc"] = term.description;
          if (term.link) attrs["data-term-link"] = term.link;

          const attrStr = Object.entries(attrs)
            .map(([k, v]) => `${k}="${v.replace(/"/g, "&quot;")}"`)
            .join(" ");

          children.push({
            type: "html",
            value: `<span class="glossary-term" ${attrStr}>${displayText}</span>`,
          });

          usedTerms.set(term.az.toLowerCase(), term);
        } else {
          missingTerms.add(termKey);
          children.push({
            type: "text",
            value: match[0],
          });
        }

        lastIndex = match.index + match[0].length;
      }

      if (lastIndex < text.length) {
        children.push({
          type: "text",
          value: text.slice(lastIndex),
        });
      }

      if (children.length > 0) {
        parent.children.splice(index, 1, ...(children as PhrasingContent[]));
      }
    });

    if (missingTerms.size > 0) {
      const terms = [...missingTerms].sort((a, b) => a.localeCompare(b, "az"));
      throw new Error(
        `[remark-glossary] Term not found for: ${terms.map((t) => `"${t}"`).join(", ")}`,
      );
    }

    // Append a "Terminlər" section at the end of the post
    if (usedTerms.size > 0) {
      const sorted = [...usedTerms.values()].sort((a, b) =>
        a.az.localeCompare(b.az, "az", { sensitivity: "base" }),
      );

      let html = `<section class="glossary-terms-section" aria-label="Terminlər">`;
      html += `<h2>Terminlər</h2>`;
      html += `<dl class="glossary-terms-list">`;
      for (const t of sorted) {
        const desc = t.description ? t.description.replace(/"/g, "&quot;") : "";
        const link = t.link ? t.link.replace(/"/g, "&quot;") : "";
        html += `<div class="glossary-terms-entry">`;
        html += `<dt><strong>${t.az}</strong> <span class="glossary-terms-en">${t.en}</span></dt>`;
        if (desc) html += `<dd>${t.description}</dd>`;
        if (link)
          html += `<dd><a href="${link}" target="_blank" rel="noopener noreferrer">↗ Ətraflı</a></dd>`;
        html += `</div>`;
      }
      html += `</dl></section>`;

      tree.children.push({ type: "html", value: html });
    }
  };
};

export default remarkGlossary;
