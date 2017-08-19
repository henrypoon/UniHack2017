import update from 'react-addons-update';
import constants from './actionConstants';


const ACTION_HANDLERS = {};
const initialState = {
	parked: {}
};


export function UserReducer(state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}
