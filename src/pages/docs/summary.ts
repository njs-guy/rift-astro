import { type Section } from "../../scripts/summarySection";

export const summary: Section[] = [
	{
		title: "A section",
		subsections: [
			{ title: "A link that works", link: "https://www.google.com" },
			{ title: "Kind of a link", link: "https://www.google.com" },
		],
	},
	{
		title: "Another section",
		subsections: [
			{ title: "Watch this not work", link: "https://www.google.com" },
			{ title: "Amazing", link: "https://www.google.com" },
		],
	},
];
