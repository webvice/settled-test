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
		case 'MESSAGES_REQUEST' : 
			return {
				loading: true,
				data: [],
				err: null
			}
		case 'MESSAGES_RECEIVE' :
			return {
				loading: false,
				data: action.messages,
				err: action.err
			}

		default:
			return state;
	}
}

export default messages