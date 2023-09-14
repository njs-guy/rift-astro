import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
	type: "content",
	schema: z.object({
		// TODO: remove slug
		slug: z.string(),
		title: z.string(),
		subtitle: z.string(),
		date: z.date(),
		author: z.string().default("No author"),
		isDraft: z.boolean().default(false),
	}),
});

const docsCollection = defineCollection({
	type: "content",
	schema: z.object({}),
});

export const collections = {
	blog: blogCollection,
	docs: docsCollection,
};
