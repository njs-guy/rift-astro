import { defineConfig } from "astro/config";
// import mdx from "@astrojs/mdx";
// import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			// Title can be ignored, Starlight crashes without it.
			title: "Rift",
		}),
		tailwind(),
	],
	output: "hybrid",
	markdown: {
		shikiConfig: {
			theme: "one-dark-pro",
		},
		remarkPlugins: [remarkToc],
	},
});
