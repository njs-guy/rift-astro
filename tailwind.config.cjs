// Fonts
const baseFontFamily = "'Inter', Arial, sans-serif";
const headingFontFamily = "'Cabin', Arial, sans-serif";
const monoFontFamily = "'JetBrains Mono', Consolas, monospace;";

// Light colors
const base100Light = "#f0f0f0";
const base200Light = "#e6e6e6";
const base300Light = "#dcdcdc";
const normalTextLight = "#101012";
const dimTextLight = "#818387";
const primaryLight = "#4fa6ed";
const secondaryLight = "#fafdff";
const accentLight = "#14b8a6";
const neutralLight = base300Light;
const infoLight = "#4fa6ed";
const successLight = "#8ebd6b";
const warningLight = "#9a6b16";
const errorLight = "#e45649";
const codeTabBorderLight = base300Light;

// Dark colors
const base100Dark = "#1f2329";
const base200Dark = "#282c34";
const base300Dark = "#30363f";
const normalTextDark = "#D6D6D6";
const dimTextDark = "#7a818e";
const primaryDark = "#c678dd";
const secondaryDark = "#e2b86b";
const accentDark = "#14b8a6";
const neutralDark = base300Dark;
const infoDark = "#1479CC";
const successDark = "#8ebd6b";
const warningDark = "#9a6b16";
const errorDark = "#993939";
const codeTabBorderDark = base300Dark;

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					...require("daisyui/src/theming/themes")["light"],
					"fontFamily": baseFontFamily,
					"base-100": base100Light,
					"base-200": base200Light,
					"base-300": base300Light,
					"base-content": normalTextLight,
					"primary": primaryLight,
					"secondary": secondaryLight,
					"accent": accentLight,
					"neutral": neutralLight,
					"neutral-content": normalTextLight,
					"info": infoLight,
					"success": successLight,
					"warning": warningLight,
					"error": errorLight,
					"--dim-text": dimTextLight,
					"--code-tab-border": codeTabBorderLight,
					"--animation-btn": "0",
					"--heading-font-family": headingFontFamily,
					"--mono-font-family": monoFontFamily,
				},
				dark: {
					...require("daisyui/src/theming/themes")["dark"],
					"fontFamily": baseFontFamily,
					"base-100": base100Dark,
					"base-200": base200Dark,
					"base-300": base300Dark,
					"base-content": normalTextDark,
					"primary": primaryDark,
					"secondary": secondaryDark,
					"accent": accentDark,
					"neutral": neutralDark,
					"neutral-content": normalTextDark,
					"info": infoDark,
					"success": successDark,
					"warning": warningDark,
					"error": errorDark,
					"--dim-text": dimTextDark,
					"--code-tab-border": codeTabBorderDark,
					"--animation-btn": "0",
					"--heading-font-family": headingFontFamily,
					"--mono-font-family": monoFontFamily,
				},
			},
		],
		darkTheme: "dark",
	},
};
