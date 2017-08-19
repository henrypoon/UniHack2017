import { connect } from 'react-redux';
import Payment from '../components/Payment';
import {
  displayDatePicker,
  closeDatePicker,
  getTime,
  getDate
} from '../modules/payment';

const mapStateToProps = (state) => ({
  carparks: state.carparks,
  carparksID: state.selectId,
  showDatePicker: state.payment.showDatePicker,
  date: state.payment.date || {},
  time: state.payment.time || {}
});

const mapActionCreators = {
  displayDatePicker,
  closeDatePicker,
  getDate,
  getTime
};
export default connect(mapStateToProps, mapActionCreators)(Payment);
