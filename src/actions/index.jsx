import { SEARCH, TESTING } from '../common'

export const searchUserData = (userid) =>  (
	{
		type: SEARCH, 
		payload: { userid }
	}
)

export const triggerAction = (input) => {
	console.log(`RUNNING ACTION WITH INPUT: `, input);

	return ({
		type: TESTING, 
		payload: { search_id: input }
	})
}

// import {
// 	API_URL
// } from '../common/'

// import axios from 'axios'

// export const searchUserData = (id, type) => {
// 	axios.get(`${API_URL}${id}/${type}`)
// 	.then((result) => {
// 		console.log(result)
// 	})
// 	.catch((error) => {
// 		console.error(`ERROR IN CALLING API `, error)
// 	})
// }