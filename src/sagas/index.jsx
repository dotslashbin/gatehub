import { all, put , takeEvery } from 'redux-saga/effects';
import { profileFunctions } from '../modules/profiles'
import { API_ERRORS, DISPLAY_REPOS, SEARCH } from '../common/actionTypes'

function* makeAPICall(action) {
	try {
		const repos = yield profileFunctions.getUserRepos(action.payload.userid)
		.then(result => result)
		yield put({ type: DISPLAY_REPOS, payload: repos })
		
	} catch (error) {
		console.log(`API ERROR: `, error)
		yield put({ type: API_ERRORS, payload: error })
	}
}

function* actionWatcher() {
	console.log(`ACTION WATCHER IS WORKING  `)
	yield takeEvery(SEARCH, makeAPICall)
}

// function getUserRepos(id) {
	
// }

export default function* rootSaga() {
	yield all([
		actionWatcher()
	]);
}