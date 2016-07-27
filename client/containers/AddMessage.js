import AddMessageUI from '../components/AddMessageUI'
import { connect } from 'react-redux'
import { addMessage } from '../actions/index'

const mapDispatchToProps = (dispatch) => {
	return {
		addMessage: (text, listingId, user) => {
			dispatch(addMessage(text, listingId, user));
		}
	}
}

export default connect(
	null,
	mapDispatchToProps
)(AddMessageUI);