import eslintPluginAstro from "eslint-plugin-astro";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
  {
    files: ["**/*.astro"],
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      // Disabled because we use set:html only with trusted static content
      "astro/no-set-html-directive": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    ignores: ["dist/**", "node_modules/**", ".astro/**", "**/*.d.ts"],
  },
];
