import axios from 'axios'

export const fetchAuthors = () => async dispatch => {
	const response = await axios.get('/data.json')

	dispatch({ type: 'FETCH_AUTHORS', payload: response.data.authors })
}

export const fetchAuthor = (authorName, authorSurname) => async dispatch => {
	const response = await axios.get('/data.json')

	response.data.authors.forEach(author => {
		if (author.name === authorName && author.surname === authorSurname) {
			dispatch({ type: 'FETCH_AUTHOR', payload: author })
		}
	})
}

export const fetchWriting = (authorName, authorSurname, writingName) => async dispatch => {
	const response = await axios.get('/data.json')

	response.data.authors.forEach(author => {
		if (author.name === authorName && author.surname === authorSurname) {
			author.writings.forEach(writing => {
				if (writing.name === writingName) {
					dispatch({ type: 'FETCH_WRITING', payload: writing })
				}
			})
		}
	})
}
