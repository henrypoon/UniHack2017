import update from 'react-addons-update';
import axios from 'axios';
import constants from './actionConstants';

//constants
const { SHOW_DATE_PICKER, CLOSE_DATE_PICKER, GET_DATE, GET_TIME } = constants;

export function getDate(payload) {
	// return {
	// 	type: GET_DATE,
	// 	payload
	// };
	return (dispatch) => {
		axios.post('http://10.1.0.154:8000/api/allRecord', {
			parkingLength: '20',
			orderNum: '123'
		})
		.then((response) => {
			console.log(response);
			dispatch({
				type: GET_DATE,
				payload
			});
		})
		.catch((error) => {
			console.log(error);
		});
	};
}

export function getTime(payload) {
	return {
		type: GET_TIME,
		payload
	};
}

export function displayDatePicker() {
	return {
		type: SHOW_DATE_PICKER,
		payload: true
	};
}

export function closeDatePicker() {
	return {
		type: CLOSE_DATE_PICKER,
		payload: false
	};
}

function handleGetDate(state, action) {
	return update(state, {
		date: {
			$set: action.payload
		},
		showDatePicker: {
			$set: false
		}
	});
}

function handleGetTime(state, action) {
	return update(state, {
		time: {
			$set: action.payload
		},
	});
}

function handleShowDatePicker(state, action) {
	return update(state, {
		showDatePicker: {
			$set: action.payload
		}
	});
}

function handleCloseDatePicker(state, action) {
	return update(state, {
		showDatePicker: {
			$set: action.payload
		}
	});
}

const ACTION_HANDLERS = {
	SHOW_DATE_PICKER: handleShowDatePicker,
	CLOSE_DATE_PICKER: handleCloseDatePicker,
	GET_DATE: handleGetDate,
	GET_TIME: handleGetTime
};

const initialState = {
	showDatePicker: false,
	time: {},
	date: {},
	carparks: {},
	carparksID: {}
};

export function PaymentReducer(state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}
