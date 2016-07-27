import { combineReducers } from 'redux';
import messages from './messages';
import listings from './listings';
import common from './common';

var reducers= combineReducers({
	messages: messages,
	listings: listings,
	common: common
})

export default reducers;