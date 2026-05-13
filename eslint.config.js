import js from "@eslint/js";
import pluginQuery from "@tanstack/eslint-plugin-query";
import { defineConfig, globalIgnores } from "eslint/config";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
    globalIgnores(["dist", "dist-electron"]),
    {
        files: ["**/*.{ts,tsx,js}"],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],
        settings: {
            "import/resolver": {
                typescript: {
                    project: "./tsconfig.json",
                },
            },
        },
        plugins: {
            "jsx-a11y": jsxA11y,
            import: importPlugin,
            "@tanstack/query": pluginQuery,
        },
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        rules: {
            "no-console": "error",
            "no-debugger": "error",
            "no-var": "error",
            "prefer-const": "error",
            eqeqeq: ["error", "always"],
            "no-empty-function": "error",
            "@typescript-eslint/no-unused-vars": [
                "error",
                { argsIgnorePattern: "^_" },
            ],
            "react/jsx-uses-react": "off",
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "jsx-a11y/anchor-is-valid": "error",
            "import/order": [
                "error",
                {
                    groups: [
                        "type",
                        ["builtin", "external"],
                        "internal",
                        ["parent", "sibling", "index"],
                    ],
                    pathGroups: [
                        {
                            pattern: "@components/**",
                            group: "internal",
                            position: "after",
                        },
                        {
                            pattern: "@styles/**",
                            group: "index",
                            position: "after",
                        },
                    ],
                    pathGroupsExcludedImportTypes: ["builtin"],
                    alphabetize: {
                        order: "asc",
                        caseInsensitive: true,
                    },
                    warnOnUnassignedImports: false,
                },
            ],
            "import/no-unresolved": "error",
            "import/no-duplicates": "error",
            semi: ["error", "always"],
            quotes: ["error", "double"],
            indent: ["error", 4],
            "comma-dangle": ["error", "always-multiline"],
            "object-curly-spacing": ["error", "always"],
            "array-bracket-spacing": ["error", "never"],
            "arrow-parens": ["error", "always"],
        },
    },
]);
