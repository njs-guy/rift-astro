import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
	type: "content",
	schema: z.object({
		slug: z.string(),
		title: z.string(),
		subtitle: z.string(),
		date: z.date(),
		author: z.string().default("No author"),
		isDraft: z.boolean().default(false),
	}),
});

const docsCollection = defineCollection({});

export const collections = {
	blog: blogCollection,
	docs: docsCollection,
};
