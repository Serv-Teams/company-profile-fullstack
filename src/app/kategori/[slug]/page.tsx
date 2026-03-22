import Link from "next/link";
import client from '@/lib/mongodb';
import { ObjectId } from "mongodb";
import { getCategory } from "../_actions/Category"
import { getProfiles } from "./_actions/Profile";


import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const slug = (await params).slug

    const db = client.db("company");

    const category = await db.collection("categories").findOne({ slug });

    if (!category) {
        return {
            title: `Serv - Company Profile | ${slug}`,
            description: `Kategori ${slug} tidak ditemukan di Serv Company Profile.`,
        }
    }

    return {
        title: `Serv - Company Profile | ${category.name}`,
        description: `Jelajahi berbagai perusahaan dalam kategori ${category.name} di Serv Company Profile. Temukan informasi lengkap tentang perusahaan-perusahaan di kategori ini untuk membantu Anda dalam mencari mitra bisnis atau peluang kerja.`,
    }
}


export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const db = client.db("company");

    // 1. Find category by slug
    const category = await db.collection("categories").findOne({ slug });

    if (!category) {
        return <div>Kategori tidak ditemukan</div>;
    }

    // 2. Find profiles by categoryId = category._id
    const profiles = await db
        .collection("profiles")
        .find({
            categoryId: new ObjectId(category._id),
        })
        .toArray();

    // 3. Convert ObjectId to string (IMPORTANT for Next.js)
    const serializedProfiles = profiles.map((item) => ({
        ...item,
        _id: item._id.toString(),
        categoryId: item.categoryId.toString(),
    }));


    // const data = await getCategory(slug);
    // const profiles = await getProfiles();
    return (
        // <div>
        //     <h1>{data?.name || slug}</h1>
        //     <ul>
        //         {profiles.map((profile) => (
        //             data?._id === profile.categoryId && (
        //                 <Link key={profile._id} href={`/${profile.slug}`}>
        //                     <li>{profile.name}</li>
        //                 </Link>
        //             )
        //         ))}
        //     </ul>
        // </div>
        <div>
            <h1>{category.name}</h1>
            <p>{category.description}</p>

            <hr />

            <h2>Perusahaan</h2>

            {serializedProfiles.length === 0 ? (
                <p>Tidak ada perusahaan dalam kategori ini.</p>
            ) : (
                <ul>
                    {serializedProfiles.map((profile: any) => (
                        <li key={profile._id}>
                            <Link href={`/${profile.slug}`}>
                                <h3>{profile.name}</h3>
                            </Link>
                            <p>{profile.city}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}