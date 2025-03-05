---
title: Documentation
---

# Documentation

## Overview

The documentation section of the site is not meant to be robust.
I mainly just made this because Rift needed documentation,
and I thought it would be fun to try and make my own solution.
If your site's needs are simple, like Rift, then this should be fine.
However, if you need something better and want to stay in the JavaScript ecosystem,
I highly recommend [VitePress](https://vitepress.dev/).
If you want to stay in the Astro ecosystem, I recommend [Starlight](https://starlight.astro.build/).

If you want to gut this documentation section entirely, you should be able to delete the docs directory
and set up VitePress or Starlight like you would with any other Astro site.
Backing up the docs is a good idea but not required.

## Sidebar

To create a side bar, create a `docs` section in your `rift-config.ts` like this.
If there is no docs configuration, the sidebar will not be displayed.

```ts
import { type RiftConfig } from "./src/scripts/riftConfig";

export const defineConfig: RiftConfig = {
	// ...
	docs: [
	{
	basePath: "/docs",
	hide: false,
	lastUpdated: true,
	hideDrafts: false,
	sidebar: [
	{
		// Section
		title: "Overview",
		subsections: [
		{ text: "Rift for Astro", link: "/docs/rift-for-astro" },
		{ text: "Project structure", link: "/docs/project-structure" },
		{ text: "Tech stack", link: "/docs/tech-stack" },
		],
	},
	{
		// Section
		title: "Getting Started",
		subsections: [
		{ text: "Quick start", link: "/docs/quick-start" },
		{ text: "Configuration", link: "/docs/configuration" },
		{ text: "Documentation", link: "/docs/documentation" },
		{ text: "Color schemes", link: "/docs/color-schemes" },
		],
	},
	],
	},
	],
};
```
