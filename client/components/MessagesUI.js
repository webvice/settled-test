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

const MessagesUI = ({messages, loading}) => {
	console.log("MessagesUI :", messages)
	var list = _.map(messages, messageRowItem);   		
	if(list.length == 0) {
		list = <h3>No Message Found. Please go to property view and message the owner</h3>
	}
	var content = <div className="ui active centered inline loader"></div>
	if (!loading) {
		content = list;
	}
	return (
		<div className="ui main text container">
			<h3 className="ui block header">Messages</h3>
			<div className="ui middle aligned divided list very relaxed">
				{content}
			</div>
		</div>
	)
}

export default MessagesUI;