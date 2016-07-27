import fetch from 'isomorphic-fetch'

export function addMessage(text, listingId, user) {
	return {type:"MESSAGE_ADD", text: text, listingId: listingId, user: user};
}

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