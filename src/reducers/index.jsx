import { API_ERRORS, DISPLAY_GROUPS, DISPLAY_REPOS } from '../common/actionTypes'

const initialState = {}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case API_ERRORS:
			return { ...state, errors: action.payload }
		case DISPLAY_GROUPS:
			return { ...state, groups: action.payload }
		case DISPLAY_REPOS: 
			return { ...state, repos: action.payloadS }
		default:
			return state;
	}
}

export default reducer