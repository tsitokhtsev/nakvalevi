export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      authors: {
        Row: {
          id: number
          image: string
          name: string
          period: number
          surname: string
          year: string
        }
        Insert: {
          id?: number
          image: string
          name: string
          period: number
          surname: string
          year: string
        }
        Update: {
          id?: number
          image?: string
          name?: string
          period?: number
          surname?: string
          year?: string
        }
        Relationships: []
      }
      essays: {
        Row: {
          createdAt: string
          id: number
          points: string[] | null
          quote: string | null
          text: string
          writingId: number | null
        }
        Insert: {
          createdAt?: string
          id?: number
          points?: string[] | null
          quote?: string | null
          text: string
          writingId?: number | null
        }
        Update: {
          createdAt?: string
          id?: number
          points?: string[] | null
          quote?: string | null
          text?: string
          writingId?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "essays_writingId_fkey"
            columns: ["writingId"]
            referencedRelation: "writings"
            referencedColumns: ["id"]
          }
        ]
      }
      genres: {
        Row: {
          description: string | null
          id: number
          name: string
        }
        Insert: {
          description?: string | null
          id?: number
          name: string
        }
        Update: {
          description?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      writings: {
        Row: {
          authorId: number
          genres: number[] | null
          id: number
          name: string
          period: number
          year: string
        }
        Insert: {
          authorId: number
          genres?: number[] | null
          id?: number
          name: string
          period: number
          year: string
        }
        Update: {
          authorId?: number
          genres?: number[] | null
          id?: number
          name?: string
          period?: number
          year?: string
        }
        Relationships: [
          {
            foreignKeyName: "writings_authorId_fkey"
            columns: ["authorId"]
            referencedRelation: "authors"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      install_available_extensions_and_test: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
