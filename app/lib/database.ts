export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[];

export type Database = {
    public: {
        Tables: {
            authors: {
                Row: {
                    id: number;
                    name: string;
                    period: number;
                    slug: string;
                    year: string;
                };
                Insert: {
                    id?: number;
                    name: string;
                    period: number;
                    slug: string;
                    year: string;
                };
                Update: {
                    id?: number;
                    name?: string;
                    period?: number;
                    slug?: string;
                    year?: string;
                };
                Relationships: [];
            };
            essays: {
                Row: {
                    createdAt: string;
                    id: number;
                    points: string[] | null;
                    quote: string | null;
                    text: string;
                    writingId: number | null;
                };
                Insert: {
                    createdAt?: string;
                    id?: number;
                    points?: string[] | null;
                    quote?: string | null;
                    text: string;
                    writingId?: number | null;
                };
                Update: {
                    createdAt?: string;
                    id?: number;
                    points?: string[] | null;
                    quote?: string | null;
                    text?: string;
                    writingId?: number | null;
                };
                Relationships: [
                    {
                        foreignKeyName: 'essays_writingId_fkey';
                        columns: ['writingId'];
                        isOneToOne: false;
                        referencedRelation: 'writings';
                        referencedColumns: ['id'];
                    },
                ];
            };
            genres: {
                Row: {
                    description: string | null;
                    id: number;
                    name: string;
                };
                Insert: {
                    description?: string | null;
                    id?: number;
                    name: string;
                };
                Update: {
                    description?: string | null;
                    id?: number;
                    name?: string;
                };
                Relationships: [];
            };
            writings: {
                Row: {
                    author_id: number;
                    id: number;
                    period: number;
                    title: string;
                    year: string;
                };
                Insert: {
                    author_id: number;
                    id?: number;
                    period: number;
                    title: string;
                    year: string;
                };
                Update: {
                    author_id?: number;
                    id?: number;
                    period?: number;
                    title?: string;
                    year?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: 'writings_author_id_fkey';
                        columns: ['author_id'];
                        isOneToOne: false;
                        referencedRelation: 'authors';
                        referencedColumns: ['id'];
                    },
                ];
            };
            writings_genres: {
                Row: {
                    created_at: string;
                    genre_id: number;
                    writing_id: number;
                };
                Insert: {
                    created_at?: string;
                    genre_id: number;
                    writing_id: number;
                };
                Update: {
                    created_at?: string;
                    genre_id?: number;
                    writing_id?: number;
                };
                Relationships: [
                    {
                        foreignKeyName: 'writings_genres_genre_id_fkey';
                        columns: ['genre_id'];
                        isOneToOne: false;
                        referencedRelation: 'genres';
                        referencedColumns: ['id'];
                    },
                    {
                        foreignKeyName: 'writings_genres_writing_id_fkey';
                        columns: ['writing_id'];
                        isOneToOne: false;
                        referencedRelation: 'writings';
                        referencedColumns: ['id'];
                    },
                ];
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            install_available_extensions_and_test: {
                Args: Record<PropertyKey, never>;
                Returns: boolean;
            };
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
};

export type Tables<
    PublicTableNameOrOptions extends
        | keyof (Database['public']['Tables'] & Database['public']['Views'])
        | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends {
        schema: keyof Database;
    }
        ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
              Database[PublicTableNameOrOptions['schema']]['Views'])
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
          Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
          Row: infer R;
      }
        ? R
        : never
    : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] &
            Database['public']['Views'])
      ? (Database['public']['Tables'] &
            Database['public']['Views'])[PublicTableNameOrOptions] extends {
            Row: infer R;
        }
          ? R
          : never
      : never;

export type TablesInsert<
    PublicTableNameOrOptions extends
        | keyof Database['public']['Tables']
        | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends {
        schema: keyof Database;
    }
        ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
          Insert: infer I;
      }
        ? I
        : never
    : PublicTableNameOrOptions extends keyof Database['public']['Tables']
      ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
            Insert: infer I;
        }
          ? I
          : never
      : never;

export type TablesUpdate<
    PublicTableNameOrOptions extends
        | keyof Database['public']['Tables']
        | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends {
        schema: keyof Database;
    }
        ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
          Update: infer U;
      }
        ? U
        : never
    : PublicTableNameOrOptions extends keyof Database['public']['Tables']
      ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
            Update: infer U;
        }
          ? U
          : never
      : never;

export type Enums<
    PublicEnumNameOrOptions extends
        | keyof Database['public']['Enums']
        | { schema: keyof Database },
    EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
        : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
    ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
    : PublicEnumNameOrOptions extends keyof Database['public']['Enums']
      ? Database['public']['Enums'][PublicEnumNameOrOptions]
      : never;
