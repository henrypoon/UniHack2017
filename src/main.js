import React from 'react';
import AppContainer from './AppContainer';
import createStore from './store/createStore';
import { Alert } from 'react-native';
import registerForNotifications from './services/push_notifications';
import Expo, { Notifications } from 'expo';

export default class Root extends React.Component {
	componentDidMount() {
		registerForNotifications();
		Notifications.addListener((notification) => {
			const { data: { text }, origin } = notification;

			if (origin === 'received' && text) {
				Alert.alert(
					'New Push Notification',
					text,
					[{ text: 'Ok.' }]
				);
			}
		});
	}


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
