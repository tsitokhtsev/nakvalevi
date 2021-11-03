import axios from 'axios'

export const fetchAuthors = () => async dispatch => {
	const response = await axios.get('/data.json')

	dispatch({ type: 'FETCH_AUTHORS', payload: response.data.authors })
}

export const fetchAuthor = id => async dispatch => {
	const response = await axios.get('/data.json')

	response.data.authors.forEach(author => {
		if (author.id === id) {
			dispatch({ type: 'FETCH_AUTHOR', payload: author })
		}
	})
}

export const fetchWriting = (authorId, writingId) => async dispatch => {
	const response = await axios.get('/data.json')

	response.data.authors.forEach(author => {
		if (author.id === authorId) {
			author.writings.forEach(writing => {
				if (writing.id === writingId) {
					dispatch({ type: 'FETCH_WRITING', payload: writing })
				}
			})
		}
	})
}