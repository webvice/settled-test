import ListingsUI from '../components/ListingsUI'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		listings: state.listings
	}
}

export default connect(
	mapStateToProps,
	null
)(ListingsUI);