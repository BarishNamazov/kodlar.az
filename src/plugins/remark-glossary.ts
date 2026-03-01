import type { Root, Text, Html, Parent, PhrasingContent } from "mdast";
import type { Plugin } from "unified";
import { lookupTerm } from "../data/glossary.ts";

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
            value: `<span class="glossary-term" ${attrStr}>${term.az}</span>`,
          });
        } else {
          console.warn(`[remark-glossary] Term not found: "${termKey}"`);
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
  };
};

export default remarkGlossary;
