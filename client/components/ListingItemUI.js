import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';
import AddMessage from '../containers/AddMessage';
import moment  from 'moment';



// var listingRowItem = (item) => (		
// 		<div key={item.id} className="item">
// 			<div className="right floated content">
// 			  <Link to={"listings/"+item.id} className="ui primary button">Details</Link>
// 			</div>
// 			<div className="content">
// 				<div className="header">{item.name}</div>
// 			  	{item.description}
// 			</div>
// 		</div>
// 	)


const ListingItemUI = (props) => {
		console.log("props in listingItemUI: ", props);
		var listingItem = props.listingItem || {};
			return (
	   			<div className="ui main text container">
					<Link to="listings" className="item"><i className="chevron left icon"></i> Back</Link>
					<h1 className="ui header">This is Listing Item {listingItem.id}</h1>
					<div className="ui items">
	  					<div className="item">
							<div className="content">
						      <div className="header">
						      	{listingItem.name}
						      </div>
						      <div className="meta">
						        <span></span>
						      </div>
						      <div className="description">
						        <p>{listingItem.description}</p>
						      </div>
						      <div className="extra">
						        <div><b>Owner: </b>{listingItem.createdBy}</div>
						        <div><b>Created at: </b>{moment(listingItem.createdAt).fromNow()}</div>
						      </div>
						    </div>
						</div>
					</div>
					<AddMessage owner={listingItem.createdBy} listingId={listingItem.id}/>
				</div>
		)
			
}

export default ListingItemUI