
const common = (state={}, action) => {
	switch(action.type){
		case 'NOTIFY_SUCCESS' : 
			return {
				show: true,
				message: action.message
			}
		case 'NOTIFY_CLEAR' :
			return {
				show: false,
				message: null
			}
		default:
			return state;
	}
}

export default common