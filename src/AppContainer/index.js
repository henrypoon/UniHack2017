import React, { Component, PropTypes } from 'react';
import { Router } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { View, Alert } from 'react-native';
import scenes from '../routes/scenes';
import Expo, { Notifications } from 'expo';
import registerForNotifications from '../services/push_notifications';
import { Actions } from 'react-native-router-flux';
import { setOrderID } from '../routes/Payment/modules/payment';

export default class AppContainer extends Component {
	static propTypes = {
		store: PropTypes.object.isRequired
	}

	componentDidMount() {
		registerForNotifications();
		Notifications.addListener((notification) => {
			const { data: { text }, origin } = notification;
			setOrderID(1);
			Actions.modal();
			if (origin === 'received' && text) {
				Alert.alert(
					'New Push Notification',
					text,
					[{ text: 'Ok.' }]
				);
			}
		});
	}

	render() {
		return (
				<Provider store={this.props.store}>
						<Router scenes={scenes} />
				</Provider>

			);
	}
}
