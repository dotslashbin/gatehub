/** Imports */
import axios from 'axios'
import { API_URL } from '../common/config'

/**
 * Class to contain functions that can be used wherever
 */
export const profileFunctions = {
	/**
	 * Returns an array objects representing user repositories. 
	 * It also executes the process of fetching API data with axios
	 */
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

	/**
	 * Returns an array representing user organizations. 
	 * It uses axios to fetch for data
	 */
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