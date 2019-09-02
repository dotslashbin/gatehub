import { SEARCH } from '../common'

export const searchUserData = (userid) =>  (
	{
		type: SEARCH, 
		payload: { userid }
	}
)