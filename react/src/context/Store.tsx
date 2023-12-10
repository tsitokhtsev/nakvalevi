import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState
} from 'react'

import { supabase } from 'supabaseClient'
import { AuthorType, GenreType, WritingWithEssays } from 'types'

type StoreProviderProps = {
	children: React.ReactNode
}

type StoreContextType = {
	writings: WritingWithEssays[]
	authors: AuthorType[]
	genres: GenreType[]
	getWritingById: (writingId: number) => Promise<WritingWithEssays | null>
	getAuthorById: (authorId: number) => Promise<AuthorType | null>
	getGenresByIds: (genresIds: number[]) => Promise<GenreType[] | []>
	getAuthorImageUrl: (name: string) => string
}

export const StoreContext = createContext<StoreContextType>({
	writings: [],
	authors: [],
	genres: [],
	getWritingById: async () => null,
	getAuthorById: async () => null,
	getGenresByIds: async () => [],
	getAuthorImageUrl: () => ''
})

export const useStore = () => useContext(StoreContext)

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
	const [writings, setWritings] = useState<WritingWithEssays[]>([])
	const [authors, setAuthors] = useState<AuthorType[]>([])
	const [genres, setGenres] = useState<GenreType[]>([])

	const getWritings = useCallback(async () => {
		const { data, error } = await supabase
			.from('writings')
			.select('*, essays(*)')
			.order('id')

		if (error) {
			console.log(error)
		}

		setWritings(data || [])
	}, [])

	const getAuthors = useCallback(async () => {
		const { data, error } = await supabase.from('authors').select('*')

		if (error) {
			console.log(error)
		}

		setAuthors(data || [])
	}, [])

	const getGenres = useCallback(async () => {
		const { data, error } = await supabase.from('genres').select('*')

		if (error) {
			console.log(error)
		}

		setGenres(data || [])
	}, [])

	const getWritingById = async (
		writingId: number
	): Promise<WritingWithEssays | null> => {
		const { data, error } = await supabase
			.from('writings')
			.select('*, essays(*)')
			.eq('id', writingId)

		if (error) {
			console.log(error)
		}

		return data ? data[0] : null
	}

	const getAuthorById = async (
		authorId: number
	): Promise<AuthorType | null> => {
		const { data, error } = await supabase
			.from('authors')
			.select('*')
			.eq('id', authorId)

		if (error) {
			console.log(error)
		}

		return data ? data[0] : null
	}

	const getGenresByIds = async (
		genresIds: number[]
	): Promise<GenreType[] | []> => {
		const { data, error } = await supabase
			.from('genres')
			.select('*')
			.in('id', genresIds)

		if (error) {
			console.log(error)
		}

		return data || []
	}

	const getAuthorImageUrl = (name: string): string => {
		const { data } = supabase.storage
			.from('images')
			.getPublicUrl(`authors/${name}.png`)

		return data.publicUrl
	}

	useEffect(() => {
		getWritings()
		getAuthors()
		getGenres()
	}, [getAuthors, getWritings, getGenres])

	return (
		<StoreContext.Provider
			value={{
				writings,
				authors,
				genres,
				getWritingById,
				getAuthorById,
				getGenresByIds,
				getAuthorImageUrl
			}}
		>
			{children}
		</StoreContext.Provider>
	)
}

export { StoreProvider }
