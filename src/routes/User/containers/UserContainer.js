import { connect } from 'react-redux';
import Home from '../components/User';
import {
  DeSetParked
} from '../modules/user';

const mapStateToProps = (state) => ({
  parked: state.payment.parked,
  carparks: state.carparks,
  time: state.payment.time
});

const mapActionCreators = {
  DeSetParked
};
export default connect(mapStateToProps, mapActionCreators)(Home);
