import { type Section } from "../../scripts/summarySection";

export const summary: Section[] = [
	{
		title: "Testing",
		subsections: [
			{ title: "Test doc", link: "/docs/test-doc" },
			{ title: "Another test doc", link: "/docs/other-test-doc" },
		],
	},
	{
		title: "Not testing",
		subsections: [
			{ title: "Watch this not work", link: "https://www.google.com" },
			{ title: "Amazing", link: "https://www.google.com" },
		],
	},
];
