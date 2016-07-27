import fetch from 'isomorphic-fetch';

/*Actions to get Listings*/
function requestListings() {
	return {type:"LISTINGS_REQUEST"};
}

function receiveListings(json) {
	return {type:"LISTINGS_RECEIVE", listings:json};
}

export function fetchListings() {
	return (dispatch) => {
		dispatch(requestListings());
		return fetch("/api/Listings")
					.then(response => response.json())
					.then(json=> dispatch(receiveListings(json)));
	}
}

/*Actions to get Messages*/
function requestMessages() {
	return {type:"MESSAGES_REQUEST"};
}

function receiveMessages(json) {
	return {type:"MESSAGES_RECEIVE", messages:json};
}

export function fetchMessages() {
	return (dispatch) => {
		dispatch(requestMessages());
		return fetch("/api/Messages")
					.then(response => response.json())
					.then(json=> dispatch(receiveMessages(json)));
	}
}

/*Actions to add Message*/
function requestMessageAdd() {
	return {type:"MESSAGE_ADD_REQUEST"};
}

function receiveMessageAdd(json) {
	console.log("Message add callback: ", json);
	return {type:"MESSAGE_ADD_RECEIVE", message:json};
}

export function addMessage(text, listingId, user) {
	return (dispatch) => {
		dispatch(requestMessageAdd());
		return fetch('/api/Messages', {
			method: 'POST',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				text: text,
				listingId: listingId,
				user: user,
				createdAt: Date.now()
			})
		})
			.then(response => response.json())
			.then(json=> {
				dispatch(receiveMessageAdd(json));
				dispatch(notify("Message sent to " + user + " successfully!"));
			});
	}
}

/*Action to notify/message */
function notify(message) {
	return (dispatch) => {
		dispatch({type: "NOTIFY_SUCCESS", message});
		setTimeout(function(){
			dispatch({type: "NOTIFY_CLEAR"});
		}, 5000)
	}
}