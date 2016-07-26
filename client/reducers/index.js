import { combineReducers } from 'redux'
import messages from './messages'
import listings from './listings'

var reducers= combineReducers({
	messages: messages,
	listings: listings
})

export default reducers

/*
 * Redux suggests use multiple reducers instead of creating multiple stores, 
 * if more than one reducer is needed, use combineReducer from 'redux' module.
 * 
 * import { composeReducers } from 'redux'
 * 
 * export default combineReducers({
 *     rootReducer
 * 	   subReducer
 * });
 * 
 */