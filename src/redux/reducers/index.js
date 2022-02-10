import _ from 'lodash'
import { combineReducers } from 'redux'

const authorsReducer = (state = {}, action) => {
	switch (action.type) {
		case 'FETCH_AUTHORS':
			return { ..._.mapKeys(action.payload, 'id') }
		case 'FETCH_AUTHOR':
			return { currentAuthor: action.payload }
		default:
			return state
	}
}

const writingsReducer = (state = {}, action) => {
	switch (action.type) {
		case 'FETCH_WRITING':
			return { currentWriting: action.payload }
		default:
			return state
	}
}

export default combineReducers({ 
	authors: authorsReducer,
	writings: writingsReducer
})
