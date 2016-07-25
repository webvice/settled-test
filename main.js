import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Listings from './app/Listings.jsx';
import ListingItem from './app/ListingItem.jsx';
import Messages from './app/Messages.jsx';
import { Router, Route, Link, browserHistory, hashHistory, IndexRoute } from 'react-router';

const NoMatch = () => (
	<h1>Path not found</h1>
)

ReactDOM.render((
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
), document.getElementById('app'));