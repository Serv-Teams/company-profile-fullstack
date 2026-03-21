import Link from "next/link";
import client from '@/lib/mongodb';
import { ObjectId } from "mongodb";
import { getCategory } from "../_actions/Category"
import { getProfiles } from "./_actions/Profile";

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
        return <div>Category not found</div>;
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
                <p>No profiles found</p>
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