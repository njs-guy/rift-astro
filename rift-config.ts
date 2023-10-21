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
};
