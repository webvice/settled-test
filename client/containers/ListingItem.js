import ListingItemUI from '../components/ListingItemUI'
import { connect } from 'react-redux';
import _ from 'lodash';

const mapStateToProps = (state, props) => {
	var listingItem = _.find(state.listings.data, { 'id': parseInt(props.params.id) });
	return {
		listingItem
	}
}

export default connect(
	mapStateToProps,
	null
)(ListingItemUI);