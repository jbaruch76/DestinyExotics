import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import exotics from './exotics'
import missingExotics from './missingExotics'


const reducer = combineReducers({user, exotics, missingExotics})

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store;
export * from './user';
export * from './exotics';
export * from './missingExotics';

