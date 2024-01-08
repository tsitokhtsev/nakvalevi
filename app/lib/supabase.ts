import { createBrowserClient, createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

import { Database } from '@/app/lib/database';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export function createSupabaseBrowserClient() {
    return createBrowserClient<Database>(supabaseUrl, supabaseAnonKey);
}

export function createSupabaseServerClient(serverComponent = false) {
    return createServerClient<Database>(
        supabaseUrl,
        supabaseAnonKey,
        {
            cookies: {
                get(name) {
                    return cookies().get(name)?.value;
                },
                set(name, value, options) {
                    if (serverComponent) {
                        return;
                    }

                    cookies().set(name, value, options);
                },
                remove(name, options) {
                    if (serverComponent) {
                        return;
                    }

                    cookies().set(name, '', options);
                }
            }
        }
    );
}
