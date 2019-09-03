/** Imports */
import { all, put , takeEvery } from 'redux-saga/effects';
import { profileFunctions } from '../modules/profiles'
import { API_ERRORS, DISPLAY_ORGS, DISPLAY_REPOS, SEARCH } from '../common/actionTypes'

/**
 * Executes the proces of calling for API calls
 * @param {*} action 
 */
function* makeAPICall(action) {
	try {
		const repos = yield profileFunctions.getUserRepos(action.payload.userid)
		.then(result => result)

		const orgs = yield  profileFunctions.getUserOrgs(action.payload.userid)
		.then(result => result)

		yield put({ type: DISPLAY_REPOS, payload: repos })
		yield put({ type: DISPLAY_ORGS, payload: orgs })

	} catch (error) {
		console.log(`API ERROR: `, error)
		yield put({ type: API_ERRORS, payload: error })
	}
}

/**
 * Main action listener
 */
function* actionWatcher() {
	yield takeEvery(SEARCH, makeAPICall)
}

/**
 * Root saga 
 */
export default function* rootSaga() {
	yield all([
		actionWatcher()
	]);
}