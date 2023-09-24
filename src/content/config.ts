import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		subtitle: z.string(),
		date: z.date(),
		author: z.string().default("No author"),
		isDraft: z.boolean().default(false),
	}),
});

const docsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		lastUpdated: z.string().optional(),
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
