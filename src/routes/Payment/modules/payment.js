import update from 'react-addons-update';
import axios from 'axios';
import constants from './actionConstants';
import { Actions } from 'react-native-router-flux';

//constants
const { SHOW_DATE_PICKER, CLOSE_DATE_PICKER, GET_DATE, GET_TIME, GET_ORDERID, SET_PARKED } = constants;

export function getDate(payload) {
	return {
		type: GET_DATE,
		payload
	};
}

export function setOrderID(payload) {
	return {
		type: GET_ORDERID,
		payload
	};
}

export function userConfirm() {
	Actions.user()
	return {
		type: SET_PARKED,
		payload: true
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


function handleSetParked(state, action) {
	return update(state, {
		parked: {
			$set: action.payload
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

function handleGetOrderID(state, action) {
	return update(state, {
		orderID: {
			$set: action.payload
		}
	});
}

const ACTION_HANDLERS = {
	SHOW_DATE_PICKER: handleShowDatePicker,
	CLOSE_DATE_PICKER: handleCloseDatePicker,
	GET_DATE: handleGetDate,
	GET_TIME: handleGetTime,
	GET_ORDERID: handleGetOrderID,
	SET_PARKED: handleSetParked
};

const initialState = {
	showDatePicker: false,
	time: {},
	date: {},
	carparks: {},
	carparksID: {},
	orderID: {}
};

export function PaymentReducer(state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}
