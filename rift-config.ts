import { type RiftConfig } from "./src/scripts/riftConfig";

export const defineConfig: RiftConfig = {
	siteTitle: "Rift",
	home: {
		heading: "Rift for Astro",
		description: "We couldn't come up with a catchy tagline",
		tagline: "How unfortunate.",
		buttons: [
			{
				label: "Get Started",
				link: "/docs",
				primary: true,
			},
			{
				label: "View on GitHub",
				link: "https://github.com/njshockey/rift-astro",
				targetBlank: true,
			},
		],
		features: [
			{
				title: "We have features!",
				description: "Most definitely!",
			},
			{
				title: "We have a cat!",
				description: "We actually don't. We're working on it.",
			},
			{
				title: "Placeholder",
				description: "Hopefully no one else will see this garbage.",
			},
		],
	},
	navbar: {
		siteName: "Rift",
		hideThemeSwitcher: false,
		items: [
			{ text: "Blog", link: "/blog" },
			{ text: "Docs", link: "/docs" },
			{ text: "About", link: "/about" },
			{
				text: "Other pages",
				children: [
					{ text: "Author", link: "/author" },
					{ text: "Showcase", link: "/showcase" },
					{ text: "Grid layout", link: "/grid" },
					{ text: "Markdown preview", link: "/blog/md-preview" },
					{ text: "Theme test", link: "/theme-test" },
				],
			},
		],
	},
	docs: [
		{
			basePath: "/docs",
			hide: false,
			lastUpdated: true,
			hideDrafts: false,
			sidebar: [
				{
					title: "Overview",
					subsections: [
						{ text: "Rift for Astro", link: "/docs/rift-for-astro" },
						{ text: "Project structure", link: "/docs/project-structure" },
						{ text: "Tech stack", link: "/docs/tech-stack" },
					],
				},
				{
					title: "Getting Started",
					subsections: [
						{ text: "Quick start", link: "/docs/quick-start" },
						{ text: "Configuration", link: "/docs/configuration" },
						{ text: "Color schemes", link: "/docs/color-schemes" },
					],
				},
			],
		},
	],
};
