import { API_ERRORS, DISPLAY_GROUPS, DISPLAY_REPOS, SEARCH } from '../common/actionTypes'

const initialState = {}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case API_ERRORS:
			return { ...state, errors: action.payload, repos:[] }
		case DISPLAY_GROUPS:
			return { ...state, groups: action.payload }
		case DISPLAY_REPOS: 
			return { ...state, repos: action.payload }
		case SEARCH:
			return { ...state, loading: true }
		default:
			return state;
	}
}

export default reducer