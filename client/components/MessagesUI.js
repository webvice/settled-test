import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';
import moment  from 'moment';

var messageRowItem = (item) => (		
		<div key={item.id} className="item">
			<div className="content">
				<div className="header">{item.text}</div>
				<div className="description">{item.user} | <Link to={"listings/"+item.listingId}>{item.listingId}</Link> | {moment(item.createdAt).fromNow()}</div>
			</div>
		</div>
	)

const MessagesUI = ({messages}) => {
	console.log("MessagesUI :", messages)
	var list = _.map(messages, messageRowItem);   		
		
	return (
		<div className="ui main text container">
			<h1 className="ui header">This is messages list</h1>
			<div className="ui middle aligned divided list very relaxed">
				{list}
			</div>
		</div>
	)
}

export default MessagesUI;