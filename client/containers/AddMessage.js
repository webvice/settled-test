import AddMessageUI from '../components/AddMessageUI'
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
	return {
		addMessage: (text, listingId, user) => {
			dispatch({type:"MESSAGE_ADD", text: text, listingId: listingId, user: user});
		}
	}
}

export default connect(
	null,
	mapDispatchToProps
)(AddMessageUI);