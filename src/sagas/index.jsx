import { all, call, put , takeEvery } from 'redux-saga/effects';

import { TESTING } from '../common'

function* runTesting() {
	try {
		const payload = call(getUserRepos)
		console.log(`FINALLY THIS IS RUNNING ...`)
		yield put({ type: 'DISPLAY_REPOS', payload })
	} catch (error) {
		yield put({ type: 'API_ERROR', payload: error })
	}
}

function* actionWatcher() {
	console.log(`ACTION WATCHER IS WORKING  `)
	yield takeEvery(TESTING, runTesting)
}

function getUserRepos() {
	return "repose erturned here"
}

export default function* rootSaga() {
	yield all([
		actionWatcher()
	]);
}