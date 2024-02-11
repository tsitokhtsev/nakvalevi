import { createSupabaseServerClient } from '@/app/lib/supabase';
import Heading from '@/app/ui/heading';
import Search from '@/app/ui/search';
import WritingCard from '@/app/ui/writing-card';

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query: string;
    };
}) {
    const query = searchParams?.query || '';

    const supabase = createSupabaseServerClient();
    const { data: writings } = await supabase
        .from('writings')
        .select('*, author:authors(*), genres(*)')
        .order('id')
        .ilike('title', `%${query}%`);

    return (
        <div className="container">
            <Heading text="ნაწარმოებები" classes="mb-4" />
            <Search />
            {writings?.length ? (
                <div className="flex flex-col gap-8">
                    {writings.map((writing) => (
                        <WritingCard key={writing.id} writing={writing} />
                    ))}
                </div>
            ) : (
                <p className="text-black">არცერთი ნაწარმოები არ მოიძებნა...</p>
            )}
        </div>
    );
}
