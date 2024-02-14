import { QueryData } from '@supabase/supabase-js';

import { Tables } from '@/app/lib/database';
import { createSupabaseClient } from '@/app/lib/supabase';

const supabase = createSupabaseClient();
const writingQuery = supabase
    .from('writings')
    .select('*, author:authors(*), genres(*)')
    .order('id')
    .single();

export type Writing = QueryData<typeof writingQuery>;
export type Author = Tables<'authors'>;
export type Genre = Tables<'genres'>;
