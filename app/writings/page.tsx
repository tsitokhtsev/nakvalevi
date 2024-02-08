import { createSupabaseServerClient } from '@/app/lib/supabase';
import Heading from '@/app/ui/heading';
import WritingCard from '@/app/ui/writing-card';

export default async function Page() {
    const supabase = createSupabaseServerClient();
    const { data: writings } = await supabase
        .from('writings')
        .select('*, author:authors(*), genres(*)')
        .order('id');
    const { data: author } = await supabase
        .from('authors')
        .select('*')
        .order('id');

    return (
        <div className="container">
            <Heading text="ნაწარმოებები" classes="mb-4" />
            {writings ? (
                <div className="flex flex-col gap-8">
                    {writings.map((writing) => {
                        return (
                            <WritingCard key={writing.id} writing={writing} />
                        );
                    })}
                </div>
            ) : (
                <p className="text-black">არცერთი ნაწარმოები არ მოიძებნა...</p>
            )}
        </div>
    );
}
