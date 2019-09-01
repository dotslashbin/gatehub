import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import root from './sagas'

const initializeSagaMiddleware = createSagaMiddleware()
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer, 
	storeEnhancers(
		applyMiddleware(initializeSagaMiddleware)
	)
)

initializeSagaMiddleware.run(root)

export default store