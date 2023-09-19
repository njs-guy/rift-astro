const starlightPlugin = require("@astrojs/starlight-tailwind");

const fontFamily = '"Open Sans", Arial, sans-serif';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("daisyui"),
		require("@astrojs/starlight-tailwind"),
	],
	daisyui: {
		themes: [
			{
				light: {
					...["[data-theme=dark]"],
					"fontFamily": fontFamily,
					"base-100": "#E6E6E6",
					"base-200": "#EBEBEB",
					"base-300": "#F0F0F0",
					"base-content": "#1e1e1e",
					"primary": "#10b981",
					"secondary": "#fafdff",
					"accent": "#14b8a6",
					// TODO: neutral, info, success, warning
					"error": "#e55561",
					"--btn-text-case": "none",
				},
				dark: {
					...["[data-theme=dark]"],
					"fontFamily": fontFamily,
					"base-100": "#1e1e1e",
					"base-200": "#262626",
					"base-300": "#2E2E2E",
					"base-content": "#E1E1E1",
					"primary": "#10b981",
					"secondary": "#0ea5e9",
					"accent": "#14b8a6",
					// TODO: neutral, info, success, warning
					"error": "#e55561",
					"--btn-text-case": "none",
				},
			},
		],
		darkTheme: "dark",
	},
};
