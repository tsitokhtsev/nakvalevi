import { Database } from '@/app/lib/database';

export type Writing = Database['public']['Tables']['writings']['Row'];

export type Author = Database['public']['Tables']['authors']['Row'];

export type Genre = Database['public']['Tables']['genres']['Row'];

export type Essay = Database['public']['Tables']['essays']['Row'];

export type WritingWithAuthorAndGenres = Writing & {
    author: Author | null;
    genres: Genre[];
};

export type WritingWithEssays = Writing & {
    essays: Essay[];
}
