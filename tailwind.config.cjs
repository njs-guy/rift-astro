// Fonts
const baseFontFamily = "Roboto, Arial, sans-serif";
const headingFontFamily = "Roboto, Arial, sans-serif";
const monoFontFamily = "mono";

// Light colors
const base100Light = "#e6e6e6";
const base200Light = "#ebebeb";
const base300Light = "#f0f0f0";
const normalTextLight = "#1e1e1e";
const dimTextLight = "#999999";
const primaryLight = "#10b981";
const secondaryLight = "#fafdff";
const accentLight = "#14b8a6";
const errorLight = "#e55561";
const codeTabUnderlineLight = "black";

// Dark colors
const base100Dark = "#1e1e1e";
const base200Dark = "#262626";
const base300Dark = "#2e2e2e";
const normalTextDark = "#e1e1e1";
const dimTextDark = "#999999";
const primaryDark = "#10b981";
const secondaryDark = "#0ea5e9";
const accentDark = "#14b8a6";
const errorDark = "#e55561";
const codeTabUnderlineDark = "black";

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
					"fontFamily": baseFontFamily,
					"base-100": base100Light,
					"base-200": base200Light,
					"base-300": base300Light,
					"base-content": normalTextLight,
					"primary": primaryLight,
					"secondary": secondaryLight,
					"accent": accentLight,
					// TODO: neutral, info, success, warning
					"error": errorLight,
					"--dim-text": dimTextLight,
					"--code-tab-underline": codeTabUnderlineLight,
					"--btn-text-case": "none",
					"--animation-btn": "0",
				},
				dark: {
					...["[data-theme=dark]"],
					"fontFamily": baseFontFamily,
					"base-100": base100Dark,
					"base-200": base200Dark,
					"base-300": base300Dark,
					"base-content": normalTextDark,
					"primary": primaryDark,
					"secondary": secondaryDark,
					"accent": accentDark,
					// TODO: neutral, info, success, warning
					"error": errorDark,
					"--dim-text": dimTextDark,
					"--code-tab-underline": codeTabUnderlineDark,
					"--btn-text-case": "none",
					"--animation-btn": "0",
				},
			},
		],
		darkTheme: "dark",
	},
};
