import { all, put , takeEvery } from 'redux-saga/effects';

import { DISPLAY_GROUPS, DISPLAY_REPOS, SEARCH } from '../common'

function* makeAPICall() {
	try {
		
		console.log('YOU ARE HERE ... ', DISPLAY_GROUPS, DISPLAY_REPOS)

		yield put({ type: 'DISPLAY_REPOS'})
	} catch (error) {
		yield put({ type: 'API_ERROR', payload: error })
	}
}

function* actionWatcher() {
	console.log(`ACTION WATCHER IS WORKING  `)
	yield takeEvery(SEARCH, makeAPICall)
}

export default function* rootSaga() {
	yield all([
		actionWatcher()
	]);
}