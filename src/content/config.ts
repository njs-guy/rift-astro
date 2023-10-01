import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		date: z.date(),
		lastUpdated: z.date().optional(),
		excerpt: z.string().optional(),
		author: z.string().default("No author"),
		isDraft: z.boolean().default(false),
		showTableOfContents: z.boolean().default(false),
	}),
});

const docsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		lastUpdated: z.date().optional(),
		previous: z.string().optional(),
		previousLabel: z.string().optional(),
		next: z.string().optional(),
		nextLabel: z.string().optional(),
		editLink: z.string().optional(),
		isDraft: z.boolean().default(false),
	}),
});

export const collections = {
	posts: blogCollection,
	docs: docsCollection,
};
