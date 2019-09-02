import { API_ERRORS, DISPLAY_GROUPS, DISPLAY_REPOS } from '../common/actionTypes'

const initialState = {}

const reducer = (state = initialState, action) => {
	console.log(action)
	switch(action.type) {
		case API_ERRORS:
			return { ...state, errors: action.payload.errors }
		case DISPLAY_GROUPS:
			return { ...state, groups: action.payload.groups }
		case DISPLAY_REPOS: 
			return { ...state, repos: action.payload.repos }
		default:
			return state;
	}
}

export default reducer