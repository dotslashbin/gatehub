import { all, put , takeEvery } from 'redux-saga/effects';
import {  SEARCH } from '../common'
import { profileFunctions } from '../modules/profiles'
// import { DISPLAY_GROUPS, DISPLAY_REPOS, SEARCH } from '../common'

function* makeAPICall(action) {
	try {
		
		const repos = profileFunctions.getUserRepos(action.payload.userid)
		console.log(repos)

		yield put({ type: 'DISPLAY_REPOS'})
	} catch (error) {
		yield put({ type: 'API_ERROR', payload: error })
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