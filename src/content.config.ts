import { defineCollection, reference } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';

const authors = defineCollection({
	loader: glob({ pattern: '*.yaml', base: 'content/authors' }),
	schema: ({ image }) =>
		z.object({
			id: z.string().regex(/^A\d{3}$/),
			name: z.string().min(1),
			birthYear: z.number().int().positive(),
			deathYear: z.number().int().positive().optional(),
			bio: z.string().min(1).optional(),
			image: image(),
		}),
});

const books = defineCollection({
	loader: glob({ pattern: '*.yaml', base: 'content/books' }),
	schema: ({ image }) =>
		z.object({
			id: z.string().regex(/^B\d{3}$/),
			title: z.string().min(1),
			authorId: reference('authors'),
			publicationYear: z.number().int().positive(),
			genre: z.string().min(1).optional(),
			pageCount: z.number().int().positive(),
			summary: z.string().min(1).optional(),
			cover: image(),
		}),
});

export const collections = { authors, books };
