import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  { ignores: ["**/node_modules/", "**/dist/"] },
  {
    rules: {
      indent: ["error", 2],
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
