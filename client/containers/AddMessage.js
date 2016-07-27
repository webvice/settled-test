import AddMessageUI from '../components/AddMessageUI';
import { connect } from 'react-redux';
import { addMessage } from '../actions/index';

const mapStateToProps = (state) => {
	return {
		loading: state.messages.loading,
		err: state.messages.err,
		notify: state.common
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addMessage: (text, listingId, user) => {
			dispatch(addMessage(text, listingId, user));
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddMessageUI);