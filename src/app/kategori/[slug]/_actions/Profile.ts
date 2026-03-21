'use server';
import client from '@/lib/mongodb';
import { unstable_cache } from 'next/cache';

export const getProfiles = unstable_cache(
    async () => {
        const db = client.db("company");
        const profiles = await db
            .collection("profiles")
            .find({})
            .toArray();
        return profiles;
    },
    ['profiles'],
    { revalidate: 1, tags: ['profiles'] }
)

export const getCategory =
    async (slug: string) => {
        const db = client.db("company");
        const category = await db
            .collection("categories")
            .findOne({ slug: slug })
        return category;
    }