const messages = (state={}, action) => {
	switch(action.type){
		case 'MESSAGE_ADD_REQUEST' : 
			return Object.assign({}, state, {loading: true});
		case 'MESSAGE_ADD_RECEIVE' :
			return {
				loading: false,
				data: [...state.data, action.message],
				err: action.err
			}
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

export default messages;