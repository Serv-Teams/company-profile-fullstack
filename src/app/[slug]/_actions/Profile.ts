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

export const getProfile =
    async (slug: string) => {
        const db = client.db("company");
        const profile = await db
            .collection("profiles")
            .findOne({ slug: slug })
        return profile;
    }