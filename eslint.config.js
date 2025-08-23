import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import css from "@eslint/css";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";

export default defineConfig([
	globalIgnores([
		"**/.DS_Store",
		"**/node_modules",
		"build",
		".svelte-kit",
		"package",
		"**/.env",
		"**/.env.*",
		"!**/.env.example",
		"pnpm-lock.yaml",
		"package-lock.json",
		"yarn.lock",
		"**/dist/",
		".astro/",
	]),
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
		plugins: { js },
		extends: ["js/recommended"],
		languageOptions: { globals: globals.browser },
	},
	{
		files: ["**/*.json"],
		plugins: { json },
		language: "json/json",
		extends: ["json/recommended"],
	},
	{
		files: ["**/*.jsonc"],
		plugins: { json },
		language: "json/jsonc",
		extends: ["json/recommended"],
	},
	{
		files: ["**/*.json5"],
		plugins: { json },
		language: "json/json5",
		extends: ["json/recommended"],
	},
	{
		files: ["**/*.md"],
		plugins: { markdown },
		language: "markdown/gfm",
		extends: ["markdown/recommended"],
	},
	{
		files: ["**/*.css"],
		plugins: { css },
		language: "css/css",
		extends: ["css/recommended"],
		rules: {
			// This rule just causes a lot of problems with Tailwind.
			"css/no-invalid-at-rules": "off",
		},
	},
	tseslint.configs.recommended,

	// The new stupid eslint config format broke the astro eslint plugin
	// so this is here to make it work again.
	// zemccartney on github is a life saver
	// https://github.com/ota-meshi/eslint-plugin-astro/issues/485#issuecomment-2974701782
	...eslintPluginAstro.configs.recommended.filter((conf) => conf.files),
	{
		extends: [...eslintPluginAstro.configs.recommended.filter((conf) => !conf.files)],
		files: ["**/*.astro"],
		rules: {
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-module.md
			// accounts for Astro frontmatter not looking like an ES Module
			"unicorn/prefer-module": ["off"],
		},
	},
]);
