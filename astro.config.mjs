import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), mdx(), sitemap()],
	output: "static",
	markdown: {
		shikiConfig: {
			theme: "one-dark-pro",
		},
		remarkPlugins: [remarkToc],
	},
	redirects: { "/docs": "/docs/rift-for-astro" },
});
