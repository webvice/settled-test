import MessagesUI from '../components/MessagesUI'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	console.log("messages state: ", state)
	return {
		messages: state.messages.data,
		loading: state.listings.loading
	}
}

export default connect(
	mapStateToProps,
	null
)(MessagesUI);