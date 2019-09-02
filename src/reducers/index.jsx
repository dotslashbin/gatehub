import { DISPLAY_GROUPS, DISPLAY_REPOS } from '../common/'

const initialState = {}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case DISPLAY_GROUPS:
			return { ...state, groups: action.payload.groups }
		case DISPLAY_REPOS:
			return { ...state, repos: action.payload.repos }
		default:
			return state;
	}
}

export default reducer