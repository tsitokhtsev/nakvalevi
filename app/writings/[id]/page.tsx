import { fetchWritingById, fetchWritings } from '@/app/lib/data';
import Heading from '@/app/ui/heading';

export async function generateStaticParams() {
    const writings = await fetchWritings();
    return writings.map((writing) => ({
        id: writing.id.toString(),
    }));
}

export default async function Page({ params }: { params: { id: string } }) {
    const writing = await fetchWritingById(params.id);
    const { title } = writing;

    return (
        <div className="container">
            <Heading text={title} />
        </div>
    );
}
