import {
	API_URL
} from '../common/'

import axios from 'axios'

export const searchUser = (id) => {
	axios.get(`${API_URL}${id}/repos`)
	.then((result) => {
		console.log(result)
	})
	.catch((error) => {
		console.error(`ERROR IN CALLING API `, error)
	})
}