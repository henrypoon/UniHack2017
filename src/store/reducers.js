import { combineReducers } from 'redux';
import { HomeReducer as home } from '../routes/Home/modules/home';
import { UserReducer as user } from '../routes/User/modules/user';
import { PaymentReducer as payment } from '../routes/Payment/modules/payment';

export const makeRootReducer = () => {
	return combineReducers({
		home,
		user,
		payment
	});
};

export default makeRootReducer;
