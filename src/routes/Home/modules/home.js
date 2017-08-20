import update from 'react-addons-update';
import { Dimensions } from 'react-native';
import constants from './actionConstants';
//CONSTANTS
const { GET_CURRENT_LOCATION, GET_INPUT, GET_LOCATIONPREDICTION, GET_REGION } = constants;
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA;
// Actions

const tempregion = {
	latitude: 37.78825,
	longitude: -122.4324,
	latitudeDelta: 0.0922,
	longitudeDelta: 0.0421,
};

export function getCurrentLocation() {
	return (dispatch) => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				dispatch({
					type: GET_CURRENT_LOCATION,
					payload: position
				});
			},
			(error) => console.log(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
	};
}

export function getInputData(payload) {
	return {
		type: GET_INPUT,
		payload
	};
}

export function getRegion(payload) {
	return {
		type: GET_REGION,
		payload
	};
}

export function getLocationPrediction() {
	return (dispatch) => {
		const userInput = 'testing';
		dispatch({
			type: GET_LOCATIONPREDICTION,
			payload: userInput
		});
	};
}


// Action Handlers
function handleGetCurrentLocation(state, action) {
	return update(state, {
		region: {
			latitude: {
				$set: action.payload.coords.latitude
			},
			longitude: {
				$set: action.payload.coords.longitude
			},
			latitudeDelta: {
				$set: LATITUDE_DELTA
			},
			longitudeDelta: {
				$set: LONGITUDE_DELTA
			}
		}
	});
}

function handleGetInputData(state, action) {
	const { key, value } = action.payload;
	return update(state, {
		inputData: {
			[key]: {
				$set: value
			}
		}
	});
}

function handleGetRegion(state, action) {
	return update(state, {
		region: {
			latitude: {
				$set: action.payload.latitude
			},
			longitude: {
				$set: action.payload.longitude
			},
			latitudeDelta: {
				$set: action.payload.latitudeDelta
			},
			longitudeDelta: {
				$set: action.payload.longitudeDelta
			}
		}
	});
}

function handleGetLocationPrediction(state, action) {
	return update(state, {
		prediction: {
			$set: action.payload
		}
	});
}


const ACTION_HANDLERS = {
	GET_CURRENT_LOCATION: handleGetCurrentLocation,
	GET_INPUT: handleGetInputData,
	GET_LOCATIONPREDICTION: handleGetLocationPrediction,
	GET_REGION: handleGetRegion
};

const initialState = {
	region: {},
	inputData: {},
	prediction: {}
};

export function HomeReducer(state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}
