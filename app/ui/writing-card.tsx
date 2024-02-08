import { WritingWithAuthorAndGenres } from '@/app/lib/definitions';
import Heading from '@/app/ui/heading';
import WritingAuthor from '@/app/ui/writing-author';
import WritingPills from '@/app/ui/writing-pills';
import Year from '@/app/ui/year';

export default function WritingCard({
    writing,
}: {
    writing: WritingWithAuthorAndGenres;
}) {
    const { title, year, period, author, genres } = writing;

    return (
        <div className="flex flex-col gap-4 rounded-3xl border border-solid border-border bg-background p-8">
            <Heading text={title} size={3} />
            <div className="flex flex-col gap-4 md:flex-row">
                <WritingAuthor author={author!} />
                <span className="hidden text-brown md:block">•</span>
                <Year year={year} />
                <span className="hidden text-brown md:block">•</span>
                <WritingPills period={period} genres={genres} />
            </div>
        </div>
    );
}
