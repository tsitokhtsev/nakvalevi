import { createClient } from '@supabase/supabase-js';

import { Database } from '@/app/lib/database';

export function createSupabaseClient() {
    return createClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );
}
