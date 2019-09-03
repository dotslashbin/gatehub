import { API_ERRORS, DISPLAY_ORGS, DISPLAY_REPOS, SEARCH } from '../common/actionTypes'

const initialState = {}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case API_ERRORS:
			return { ...state, errors: action.payload, repos:[] }
		case DISPLAY_ORGS:
			return { ...state, orgs: action.payload }
		case DISPLAY_REPOS: 
			return { ...state, repos: action.payload }
		case SEARCH:
			return { ...state, loading: true }
		default:
			return state;
	}
}

export default reducer