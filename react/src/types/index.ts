import { Database } from 'types/database'

export type WritingType = Database['public']['Tables']['writings']['Row']
export type AuthorType = Database['public']['Tables']['authors']['Row']
export type GenreType = Database['public']['Tables']['genres']['Row']
export type EssayType = Database['public']['Tables']['essays']['Row']

export interface WritingWithEssays extends WritingType {
	essays: EssayType[]
}
