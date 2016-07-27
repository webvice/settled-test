import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';

class AddMessageUI extends React.Component {

	constructor(props) {
		super(props);
		this.state= {
			message: '',
			listingId: props.listingId,
			user: props.user
		}
		this.handleMessageChange = this.handleMessageChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleMessageChange(e) {
	  this.setState({message: e.target.value});
	}

	handleSubmit(e) {
	  e.preventDefault();
	  var message = this.state.message.trim();
	  if (!message) {
	    return;
	  }
	  this.props.addMessage(message, this.state.listingId, this.state.user);
	  this.setState({message: ''});
	}

   	render() {
   		var loading = null;
   		var success;
   		if (this.props.loading) {
   			loading = <div className="ui active inline loader"></div>
   		}
   		if (this.props.notify.show) {
   			success=<div className="ui positive message">
   			  <div className="header">
   			    {this.props.notify.message}
   			  </div>
   			</div>
   		}
   		return (
			<div className="ui items">
			    <form className="ui form" name="messageForm" onSubmit={this.handleSubmit}>
			      <div className="field">
			        <label>Send message to {this.props.user}</label>
			        <textarea id="message" name="message" value={this.state.message} onChange={this.handleMessageChange} required></textarea>
			      </div>
			      <button type="submit" className="ui primary button" value="Post" disabled={loading?"disabled":""}>Send</button> {loading}
			    </form>
			    {success}
			</div>
		)
	}
}

export default AddMessageUI;