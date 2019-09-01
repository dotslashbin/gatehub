import { SEARCH, TESTING } from '../common/'

const initialState = {}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case SEARCH:
				return { ...state, user_id: action.user_id }
		case TESTING: 
				return { ...state, testing: 'foo' }
		default:
			return state;
	}
}

export default reducer