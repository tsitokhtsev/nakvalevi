import { createSupabaseClient } from '@/app/lib/supabase';

export async function fetchWritings() {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
        .from('writings')
        .select('*, author:authors(*), genres(*)')
        .order('id');

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

export async function fetchWritingById(id: string) {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
        .from('writings')
        .select('*, author:authors(*), genres(*)')
        .eq('id', id)
        .single();

    if (error) {
        throw new Error(error.message);
    }

    if (!data) {
        throw new Error('Writing not found');
    }

    return data;
}
