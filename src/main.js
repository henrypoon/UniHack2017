import React from 'react';
import { Alert } from 'react-native';
import AppContainer from './AppContainer';
import createStore from './store/createStore';
import registerForNotifications from './services/push_notifications';

export default class Root extends React.Component {

	renderApp() {
		const initialState = window.___INTITIAL_STATE__;
		const store = createStore(initialState);

		return (
			<AppContainer store={store} />
		);
	}

	render() {
		return this.renderApp();
	}
}
