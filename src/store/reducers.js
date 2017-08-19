import { combineReducers } from 'redux';
import { HomeReducer as home } from '../routes/Home/modules/home';
import { UserReducer as user } from '../routes/User/modules/user';
import { PaymentReducer as payment } from '../routes/Payment/modules/payment';
import SelectReducer from '../routes/ListPage/modules/SelectReducer';
import ListPageReducer from '../routes/ListPage/modules/ListPageReducer';

export const makeRootReducer = () => {
	return combineReducers({
		home,
		user,
		payment,
		carparks: ListPageReducer,
		selectId: SelectReducer
	});
};

export default makeRootReducer;
