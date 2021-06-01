import { combineReducers, createStore, applyMiddleware } from 'redux'
import loadingReducer from './reducers/loadingReducers'
import accountReducer from './reducers/accountReducers'
import repositoryReducer from './reducers/repositoryReducers'
import thunk from 'redux-thunk'

const reducer = combineReducers({accounts: accountReducer, repositories: repositoryReducer, loading: loadingReducer})


const store = createStore(reducer, applyMiddleware(thunk))

export default store