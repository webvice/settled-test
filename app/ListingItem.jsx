import React from 'react';
import { Link } from 'react-router';

class ListingItem extends React.Component {
   	render() {
		return (
			<div className="ui main text container">
				<Link to="listings" className="item">Back</Link>
				<h1 className="ui header">This is Listing Item {this.props.params.id}</h1>
				<div className="ui items">
  					<div className="item">
						<div className="content">
					      <div className="header">
					      	Property 1
					      </div>
					      <div className="meta">
					        <span></span>
					      </div>
					      <div className="description">
					        <p>This is the description of Property 1</p>
					      </div>
					      <div className="extra">
					        <div><b>Created by: </b>User1</div>
					        <div><b>Created at: </b>{Date.now()}</div>
					      </div>
					    </div>
					</div>
				</div>

			    <div className="ui form">
			      <div className="field">
			        <label>Message</label>
			        <textarea></textarea>
			      </div>
			      <div className="ui button">Send</div>
			    </div>
			</div>
		)
	}
}

export default ListingItem;