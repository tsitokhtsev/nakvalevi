import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	useCallback
} from 'react'
import { supabase } from 'supabaseClient'

export const StoreContext = createContext()

export const useStore = () => useContext(StoreContext)

const StoreProvider = ({ children }) => {
	const [authors, setAuthors] = useState([])
	const [writings, setWritings] = useState([])
	const [genres, setGenres] = useState([])

	const getAuthors = useCallback(async () => {
		const { data, error } = await supabase.from('authors').select('*')

		if (error) {
			console.log(error)
		}

		setAuthors(data || [])
	}, [])

	const getWritings = useCallback(async () => {
		const { data, error } = await supabase
			.from('writings')
			.select('*')
			.order('id')

		if (error) {
			console.log(error)
		}

		setWritings(data || [])
	}, [])

	const getGenres = useCallback(async () => {
		const { data, error } = await supabase.from('genres').select('*')

		if (error) {
			console.log(error)
		}

		setGenres(data || [])
	}, [])

	const getAuthorById = (authorId) => {
		return authors.find((author) => author.id === authorId)
	}

	const getWritingById = async (writingId) => {
		const { data, error } = await supabase
			.from('writings')
			.select('*')
			.eq('id', writingId)

		if (error) {
			console.log(error)
		}

		return data[0] || {}
	}

	const getGenresByIds = (genresIds) => {
		return genres.filter((genre) => genresIds.includes(genre.id))
	}

	const getAuthorImageUrl = (name) => {
		const { data, error } = supabase.storage
			.from('images')
			.getPublicUrl(`authors/${name}.png`)

		if (error) {
			console.log(error)
		}

		return data.publicUrl
	}

	useEffect(() => {
		getAuthors()
		getWritings()
		getGenres()
	}, [getAuthors, getWritings, getGenres])

	return (
		<StoreContext.Provider
			value={{
				authors,
				writings,
				genres,
				getAuthorById,
				getWritingById,
				getGenresByIds,
				getAuthorImageUrl
			}}
		>
			{children}
		</StoreContext.Provider>
	)
}

export { StoreProvider }
