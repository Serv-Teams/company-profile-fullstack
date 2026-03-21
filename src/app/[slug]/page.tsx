import Link from "next/link";
import { getProfiles } from "../kategori/[slug]/_actions/Profile";
import { getProfile } from "./_actions/Profile";
import ProductDetails from "./_components";


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