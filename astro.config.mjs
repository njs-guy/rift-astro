import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), mdx(), sitemap()],
	output: "hybrid",
	markdown: {
		shikiConfig: {
			theme: "one-dark-pro",
		},
		remarkPlugins: [remarkToc],
	},
});
