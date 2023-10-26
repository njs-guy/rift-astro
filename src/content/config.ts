import { z, defineCollection } from "astro:content";

// TODO: Have last updated use git timestamp. Can be overwritten manually.

// TODO: Update schema. Title is optional.

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
		editLink: z.string().optional(),
		isDraft: z.boolean().default(false),
	}),
});

export const collections = {
	posts: blogCollection,
	docs: docsCollection,
};
