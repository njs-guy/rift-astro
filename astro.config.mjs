import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), sitemap()],
	markdown: {
		shikiConfig: {
			theme: "one-dark-pro",
		},
		remarkPlugins: [remarkToc],
	},
});
