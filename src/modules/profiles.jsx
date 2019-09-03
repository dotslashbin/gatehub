import axios from 'axios'
import { API_URL } from '../common/config'

export const profileFunctions = {
	getUserRepos: (userid) => {
		return axios.get(`${API_URL}${userid}/repos`)
			.then((result) => {
				if (result.data) {
					return result.data
				}
				
				return []
			})
			.catch((error) => {
				console.error(`THERE WAS AN ERROR CALLING API FOR REPOS`, error)
			})
	}, 
	getUserOrgs: (userid) => {
		return axios.get(`${API_URL}${userid}/orgs`)
			.then((result) => {
				if (result.data) {
					return result.data
				}
				
				return []
			})
			.catch((error) => {
				console.error(`THERE WAS AN ERROR CALLING API FOR ORGS`, error)
			})
	}
}