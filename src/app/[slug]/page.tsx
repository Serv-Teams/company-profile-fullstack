import Link from "next/link";
import { getProfiles } from "../kategori/[slug]/_actions/Profile";
import { getProfile } from "./_actions/Profile";
import ProductDetails from "./_components";


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

    const rawData = await getProfile(slug);
    const data = JSON.parse(JSON.stringify(rawData));

    return {
        title: `Serv - Company Profile | ${data?.name || slug}`,
        description: data?.description || `Informasi lengkap tentang perusahaan ${data?.name || slug} di Serv Company Profile.`,
    }
}


export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    const rawData = await getProfile(slug);

    const data = JSON.parse(JSON.stringify(rawData));
    // const profiles = await getProfiles();
    return (
        <div>
            {/* <h1>{data?.name || slug}</h1>
            <p>
                {
                    data?.description
                }
            </p> */}
            <ProductDetails data={data}
            // category={data.categoryId} 
            />
        </div>
    )
}