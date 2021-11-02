import _ from 'lodash'
import { combineReducers } from 'redux'

const authorsReducer = (state = {}, action) => {
	switch (action.type) {
		case 'FETCH_AUTHORS':
			return { ...state, ..._.mapKeys(action.payload, 'id') }
		default:
			return state
	}
}

export default combineReducers({ authors: authorsReducer })