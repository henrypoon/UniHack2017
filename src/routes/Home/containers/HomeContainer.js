import { connect } from 'react-redux';
import Home from '../components/Home';
import {
	getCurrentLocation,
	getInputData,
	getLocationPrediction,
	getRegion
} from '../modules/home';

const mapStateToProps = (state) => ({
	region: state.home.region,
	inputData: state.home.inputData || {},
	prediction: state.home.prediction || {}
});

const mapActionCreators = {
	getCurrentLocation,
	getInputData,
	getLocationPrediction,
	getRegion
};
export default connect(mapStateToProps, mapActionCreators)(Home);
