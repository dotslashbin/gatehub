import {
	API_URL
} from '../common/'

import axios from 'axios'

export const searchUserData = (id, type) => {
	axios.get(`${API_URL}${id}/${type}`)
	.then((result) => {
		console.log(result)
	})
	.catch((error) => {
		console.error(`ERROR IN CALLING API `, error)
	})
}