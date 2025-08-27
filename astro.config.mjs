import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
	output: "static",
	markdown: {
		shikiConfig: {
			themes: {
				light: "one-light",
				dark: "one-dark-pro",
			},
		},
		remarkPlugins: [remarkToc],
	},
	redirects: { "/docs": "/docs/rift-for-astro" },
});
