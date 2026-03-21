'use server';
import client from '@/lib/mongodb';
import { unstable_cache } from 'next/cache';

export const getCategories = unstable_cache(
    async () => {
        const db = client.db("company");
        const categories = await db
            .collection("categories")
            .find({})
            .toArray();
        return categories;
    },
    ['categories'],
    { revalidate: 1, tags: ['categories'] }
)

export const getCategory =
    async (slug: string) => {
        const db = client.db("company");
        const category = await db
            .collection("categories")
            .findOne({ slug: slug })
        return category;
    }


// export const getCategory = async (slug: string) => {
//     const db = client.db("company");
//     const category = await db
//         .collection("categories")
//         .findOne({ slug: slug })
//     return category;
// }