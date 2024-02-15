import Link from 'next/link';

import { Writing } from '@/app/lib/definitions';
import Heading from '@/app/ui/heading';
import WritingAuthor from '@/app/ui/writing-author';
import WritingPills from '@/app/ui/writing-pills';
import Year from '@/app/ui/year';

export default function WritingCard({ writing }: { writing: Writing }) {
    const { id, title, year, period, author, genres } = writing;

    return (
        <Link
            href={`/writings/${id}`}
            className="flex flex-col gap-4 rounded-2xl border border-solid border-green-light bg-green-lighter p-4 duration-300 hover:scale-[101%] md:rounded-3xl md:p-8"
        >
            <Heading text={title} size={3} />
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
                <WritingAuthor author={author!} />
                <Year year={year} />
                <WritingPills period={period} genres={genres} />
            </div>
        </Link>
    );
}
