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
import { fetchListings, fetchMessages } from './actions/index';

const NoMatch = () => (
	<h1>Path not found</h1>
)
const Dashboard = () => (
  <div className="ui main text container">
    <h3 className="ui block header">Dashboard</h3>
  </div>
)

const store = configureStore();



ReactDOM.render(
  <Provider store={store}>
  		<Router history={hashHistory}>
  		    <Route path="/" component={App}>
            <IndexRoute component={Dashboard}/>
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



store.dispatch(fetchListings()).then(() =>
  console.log("Listings list action done: ", store.getState())
)
store.dispatch(fetchMessages()).then(() =>
  console.log("Messages list action done: ", store.getState())
)