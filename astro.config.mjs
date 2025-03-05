import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import remarkToc from "remark-toc";

import OneLight from "./shiki-themes/OneLight.json";

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), sitemap()],
	output: "static",
	markdown: {
		shikiConfig: {
			// Temporary One Light theme until it's added into Astro.
			// Shiki Textmate Grammar Themes - https://github.com/shikijs/textmate-grammars-themes/tree/main/packages/tm-themes
			// One Light theme by akamud - https://github.com/akamud/vscode-theme-onelight/blob/f1ff6b87c6379a22b34354bbf64d355cd2adc611/themes/OneLight.json#L1
			themes: {
				light: OneLight,
				dark: "one-dark-pro",
			},
		},
		remarkPlugins: [remarkToc],
	},
	redirects: { "/docs": "/docs/rift-for-astro" },
	vite: {
		plugins: [tailwindcss()],
	},
});
