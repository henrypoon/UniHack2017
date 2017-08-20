import { connect } from 'react-redux';
import Payment from '../components/Payment';
import {
  displayDatePicker,
  closeDatePicker,
  getTime,
  getDate,
  setOrderID,
  userConfirm
} from '../modules/payment';

const mapStateToProps = (state) => ({
  carparks: state.carparks,
  carparksID: state.selectId,
  showDatePicker: state.payment.showDatePicker,
  date: state.payment.date || {},
  time: state.payment.time || {},
  orderID: state.payment.orderID,
  parked: state.user.parked
  
});

const mapActionCreators = {
  displayDatePicker,
  closeDatePicker,
  getDate,
  getTime,
  userConfirm,
  setOrderID,
};
export default connect(mapStateToProps, mapActionCreators)(Payment);
