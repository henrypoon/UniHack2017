import React from 'react';
import { View, Text } from 'react-native';
import { NotPark } from './NotPark';
import { Park } from './Park';

class User extends React.Component {
	renderUser() {
		if (!this.props.parked) {
			return (
				<View>
					<NotPark />
				</View>
			);
		} else {
			return (
				<View>
					<Park />
				</View>
			);
		}
	}
	render() {
		return (
			<View>
				{this.renderUser()}
			</View>
		);
	}
}

export default User;
