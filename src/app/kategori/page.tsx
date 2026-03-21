import { getCategories } from './_actions/Category';
import Index from './_components';

export default async function Page() {
    const data = await getCategories();

    return (
        <Index categories={data} />
    );
}
