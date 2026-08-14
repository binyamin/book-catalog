import { z } from 'astro/zod';

export const $genre = z.enum([
	// Fiction
	'Mystery & Crime',
	'Thriller & Suspense',
	'Science Fiction',
	'Fantasy',
	'Romance',
	'Historical Fiction',
	'Horror',
	// Non-Fiction
	'Biography & Memoir',
	'History',
	'Religion & Spirituality',
	'Philosophy',
	'Self-Help',
	'Business',
	'Politics',
	'Science',
	'Technology',
	'Health',
	'Arts & Culture',
	'Reference',
]);

const id = z.stringFormat('slug', /^[\w-]+$/);

export const $author = z.object({
	id,
	name: z.string().nonempty(),
	birthYear: z.number().int().positive().gte(1e3),
	deathYear: z.number().int().positive().gte(1e3).nullable().optional(),
	bio: z.string().nonempty().optional(),
	image: z.string().nonempty().optional(),
});

export const $book = z.object({
	id,
	title: z.string().nonempty(),
	author: id,
	/** The year in which this book was *first* published */
	publicationYear: z.number().int().positive().gte(1e3)
		.describe('The year in which this book was *first* published'),
	genre: z.array($genre).min(1).max(3).optional(),
	summary: z.string().nonempty().optional(),
	cover: z.string().nonempty().optional(),
});
