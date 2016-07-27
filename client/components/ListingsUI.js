import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';



var listingRowItem = (item) => (		
		<div key={item.id} className="item">
			<div className="right floated content">
			  <Link to={"listings/"+item.id} className="ui primary button">Details</Link>
			</div>
			<div className="content">
				<div className="header">{item.name}</div>
			  	{item.description}
			</div>
		</div>
	)


const ListingsUI = ({listings, loading}) => {
	var list = _.map(listings, listingRowItem);   		
	console.log("ListingsUI: ", loading)
	var content = <div className="ui active centered inline loader"></div>
	if (!loading) {
		content = list;
	}
	return (
		<div className="ui main text container">
			<h3 className="ui block header">Properties</h3>
			<div className="ui middle aligned divided list very relaxed">
				{content}
			</div>
		</div>
	)
	
}

export default ListingsUI