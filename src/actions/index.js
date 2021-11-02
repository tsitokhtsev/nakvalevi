import axios from 'axios'

export const fetchAuthors = () => async dispatch => {
	const response = await axios.get('data.json')

	dispatch({ type: 'FETCH_AUTHORS', payload: response.data.authors })
}

export const fetchAuthor = (name, surname) => {
	const response = axios.get('data.json')
	console.log(response)

	return {
		type: 'FETCH_AUTHOR',
		payload: response.data
	}
}