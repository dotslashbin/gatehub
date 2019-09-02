import { all, put , takeEvery } from 'redux-saga/effects';
import {  SEARCH } from '../common'
import { profileFunctions } from '../modules/profiles'
import ReportDispatcher from 'jest-jasmine2/build/jasmine/ReportDispatcher';
// import { DISPLAY_GROUPS, DISPLAY_REPOS, SEARCH } from '../common'

function* makeAPICall(action) {
	try {
		profileFunctions.getUserRepos(action.payload.userid)
		.then((testing) => {
			console.log(testing)
		})
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