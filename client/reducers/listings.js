const listings = (state=[], action) => {
	switch(action.type){
		case 'LISTINGS_REQUEST' : 
			return {
				loading: true,
				data: [],
				err: null
			}
		case 'LISTINGS_RECEIVE' :
			return {
				loading: false,
				data: action.listings,
				err: action.err
			}
		default:
			return state;
	}
}

export default listings;