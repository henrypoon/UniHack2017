import { connect } from 'react-redux';
import Home from '../components/User';
import {

} from '../modules/user';

const mapStateToProps = (state) => ({
  parked: state.user.parked
});

const mapActionCreators = {

};
export default connect(mapStateToProps, mapActionCreators)(Home);
