import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';
import AddMessage from '../containers/AddMessage';
import moment  from 'moment';

const ListingItemUI = (props) => {
		console.log("props in listingItemUI: ", props);
		var listingItem = props.listingItem || {};
		return (
   			<div className="ui main text container">
				<Link to="listings" className="item"><i className="chevron left icon"></i> Back</Link>
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
				<AddMessage user={listingItem.createdBy} listingId={listingItem.id}/>
			</div>
		)
			
}

export default ListingItemUI