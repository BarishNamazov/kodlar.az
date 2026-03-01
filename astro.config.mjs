import { defineConfig } from "astro/config";
import remarkGlossary from "./src/plugins/remark-glossary.ts";

export default defineConfig({
  site: "https://kodlar.az",
  output: "static",
  build: {
    format: "directory",
  },
  markdown: {
    remarkPlugins: [remarkGlossary],
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
});
