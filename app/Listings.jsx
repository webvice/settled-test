import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';

var listingRowItem = (item) => (		
		<div key={item.id} className="item">
			<div className="right floated content">
			  <Link to={"listings/"+item.id} className="ui button">Details</Link>
			</div>
			<div className="content">
				<div className="header">{item.name}</div>
			  	{item.description}
			</div>
		</div>
	)

class Listings extends React.Component {
	
	constructor(props) {
		super(props);
		this.state= {
			listings: [
				{
					id: 1,
					name: "Property 1",
					description: "This is the description of Property 1",
					createdBy: "User1",
					createdAt: Date.now()
				},
				{
					id: 2,
					name: "Property 2",
					description: "This is the description of Property 2",
					createdBy: "User2",
					createdAt: Date.now()
				},
				{
					id: 3,
					name: "Property 3",
					description: "This is the description of Property 3",
					createdBy: "User3",
					createdAt: Date.now()
				},
				{
					id: 4,
					name: "Property 4",
					description: "This is the description of Property 4",
					createdBy: "User4",
					createdAt: Date.now()
				},
				{
					id: 5,
					name: "Property 5",
					description: "This is the description of Property 5",
					createdBy: "User5",
					createdAt: Date.now()
				},
				{
					id: 6,
					name: "Property 6",
					description: "This is the description of Property 6",
					createdBy: "User6",
					createdAt: Date.now()
				},

			]

			
		}
	}

   	render() {
   		var list = _.map(this.state.listings, listingRowItem);

   		
   		
		return (
			<div className="ui main text container">
				<h1 className="ui header">This is Listings</h1>
				<div className="ui middle aligned divided list very relaxed">
					{list}
				</div>
			</div>
		)
	}
}

export default Listings;