import Image from 'next/image';

import { Author } from '@/app/lib/definitions';
import { createSupabaseServerClient } from '@/app/lib/supabase';

export default function WritingAuthor({ author }: { author: Author }) {
    const supabase = createSupabaseServerClient();
    const { data } = supabase.storage
        .from('images')
        .getPublicUrl(`authors/${author.image}.png`);

    return (
        <div className="flex items-center gap-2">
            <Image
                className="rounded-full"
                src={data.publicUrl}
                alt={author.name}
                width={24}
                height={24}
            />
            <span className="text-black">{author.name}</span>
        </div>
    );
}
