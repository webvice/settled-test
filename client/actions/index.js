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