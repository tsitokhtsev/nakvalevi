import React, { createContext, useContext, useState, useEffect } from 'react'
import { supabase } from 'supabaseClient'

export const StoreContext = createContext()

export const useStore = () => useContext(StoreContext)

const StoreProvider = ({ children }) => {
	const [authors, setAuthors] = useState([])
	const [writings, setWritings] = useState([])
	const [genres, setGenres] = useState([])

	const getAuthorImage = async (image) => {
		const { data: { publicUrl }, error } = await supabase.storage
			.from('images')
			.getPublicUrl(`authors/${image}.png`)

		if (error) {
			console.log(error)
		}

		return publicUrl || null
	}

	const getAuthors = async () => {
		const { data: authors, error } = await supabase
			.from('authors')
			.select('*')

		if (error) {
			console.log(error)
		} else {
			const authorsWithImages = await Promise.all(
				authors.map(async (author) => {
					const image = await getAuthorImage(author.image)
					return { ...author, image }
				})
			)

			setAuthors(authorsWithImages)
		}
	}

	const getWritings = async () => {
		const { data: writings, error } = await supabase
			.from('writings')
			.select('*')
			.order('id')

		if (error) {
			console.log(error)
		} else {
			setWritings(writings)
		}
	}

	const getGenres = async () => {
		const { data: genres, error } = await supabase
			.from('genres')
			.select('*')

		if (error) {
			console.log(error)
		} else {
			setGenres(genres)
		}
	}

	useEffect(() => {
		getAuthors()
		getWritings()
		getGenres()
	}, [])

	return (
		<StoreContext.Provider
			value={{
				authors,
				writings,
				genres
			}}
		>
			{children}
		</StoreContext.Provider>
	)
}

export { StoreProvider }
