import update from 'react-addons-update';
import constants from './actionConstants';
import { Actions } from 'react-native-router-flux';




export function DeSetParked() {
	Actions.home()
	return {
		type: DE_SET_PARKED,
		payload: false
	};
}

function handleDeSetParked(state, action) {
	return update(state, {
		parked: {
			$set: action.payload
		}
	});
}

const ACTION_HANDLERS = {
	DE_SET_PARKED: handleDeSetParked
};

const initialState = {
	parked: false
};


export function UserReducer(state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}
