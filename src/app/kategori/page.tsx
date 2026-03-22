import { getCategories } from './_actions/Category';
import Index from './_components';

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Serv - Company Profile | Kategori',
    description: 'Jelajahi berbagai kategori perusahaan di Serv Company Profile.',
}

export default async function Page() {
    const data = await getCategories();

    return (
        <Index categories={data} />
    );
}
