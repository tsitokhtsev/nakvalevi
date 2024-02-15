import { fetchWritingById, fetchWritings } from '@/app/lib/data';
import Heading from '@/app/ui/heading';
import WritingAuthor from '@/app/ui/writing-author';
import WritingPills from '@/app/ui/writing-pills';
import Year from '@/app/ui/year';

export async function generateStaticParams() {
    const writings = await fetchWritings();
    return writings.map((writing) => ({
        id: writing.id.toString(),
    }));
}

export default async function Page({ params }: { params: { id: string } }) {
    const writing = await fetchWritingById(params.id);
    const { title, author, year, period, genres } = writing;

    return (
        <div className="container">
            <Heading text={title} />
            <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-brown-lighter p-8 md:flex-row md:items-center md:gap-8 md:rounded-3xl">
                <WritingAuthor author={author!} />
                <Year year={year} />
                <WritingPills period={period} genres={genres} />
            </div>
        </div>
    );
}
