import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory, hashHistory, IndexRoute } from 'react-router';

import App from './containers/App';
import Listings from './containers/Listings.js';
import ListingItem from './containers/ListingItem.js';
import Messages from './containers/Messages.js';
import configureStore from './store/configureStore';

const NoMatch = () => (
	<h1>Path not found</h1>
)
const store = configureStore();



ReactDOM.render(
  <Provider store={store}>
  		<Router history={hashHistory}>
  		    <Route path="/" component={App}>
  		      <Route path="listings">
  		      	<IndexRoute component={Listings} />
  		      	<Route path=":id" component={ListingItem}/>
  		      </Route>
  		      <Route path="messages" component={Messages}/>
  		      <Route path="*" component={NoMatch}/>
  		    </Route>
  		  </Router>
  </Provider>,
  document.getElementById('root')
);



