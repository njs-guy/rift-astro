import { type RiftConfig } from "./src/scripts/riftConfig";

export const defineConfig: RiftConfig = {
	siteTitle: "Rift",
	homeHeading: "Rift for Astro",
	description: "We couldn't come up with a catchy tagline",
	tagline: "How unfortunate.",
	homeButtons: [
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
};
