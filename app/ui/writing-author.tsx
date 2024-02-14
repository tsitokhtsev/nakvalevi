import Image from 'next/image';

import { Author } from '@/app/lib/definitions';

export default function WritingAuthor({ author }: { author: Author }) {
    const imageUrlPrefix = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/authors/`;
    const { name, slug } = author;

    return (
        <div className="flex items-center gap-2">
            <Image
                className="rounded-full"
                src={imageUrlPrefix + slug + '.png'}
                alt={author.name}
                width={24}
                height={24}
            />
            <span className="text-black">{name}</span>
        </div>
    );
}
