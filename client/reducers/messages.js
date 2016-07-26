const messages = (state=[], action) => {
	switch(action.type){
		case 'MESSAGE_ADD' : 
			var message = {
				id: state.length+1,
				text:action.text,
				listingId: action.listingId,
				user: action.user,
				createdAt: Date.now()
			}
			return [...state, message];

		default:
			return state;
	}
}

export default messages