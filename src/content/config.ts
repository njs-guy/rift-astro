import { z, defineCollection } from "astro:content";

// TODO: Have last updated use git timestamp. Can be overwritten manually.

const blogCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string().optional(),
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
		title: z.string().optional(),
		description: z.string().optional(),
		lastUpdated: z.string().optional(),
		editLink: z.string().optional(),
		isDraft: z.boolean().default(false),
	}),
});

export const collections = {
	posts: blogCollection,
	docs: docsCollection,
};
