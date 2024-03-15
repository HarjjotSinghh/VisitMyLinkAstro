import { db, Redirects } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Redirects).values([
		{ slug: 'harjot', to: 'https://harjot.pro' },
	])
}