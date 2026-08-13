import { glob } from 'astro/loaders';
import { defineCollection, reference } from 'astro:content';
import { $author, $book } from './lib/models';

const authors = defineCollection({
	loader: glob({ pattern: '*.yaml', base: 'content/authors' }),
	schema: ({ image }) =>
		$author.extend({
			image: image().optional(),
		}),
});

const books = defineCollection({
	loader: glob({ pattern: '*.yaml', base: 'content/books' }),
	schema: ({ image }) =>
		$book.extend({
			author: reference('authors'),
			cover: image().optional(),
		}),
});

export const collections = { authors, books };
