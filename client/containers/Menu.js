import React from 'react';
import { Link, IndexLink } from 'react-router';

var highlightStyle = {color:'green'};

class Menu extends React.Component {
   	render() {
		return (
			<div className="ui fixed inverted menu">
			    <div className="ui container">
			      <a href="#" className="header item">
			        Project Name
			      </a>
			      <IndexLink activeStyle={highlightStyle} to="/" className="item">Home</IndexLink>
			      <Link activeStyle={highlightStyle} to="/listings" className="item">Listings</Link>
			      <IndexLink activeStyle={highlightStyle} to="/messages" className="item">Messages</IndexLink>			      
			    </div>
			    <hr/>
			  </div>
		)
	}
}

export default Menu;