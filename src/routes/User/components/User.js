import React from 'react';
import { View, Text } from 'react-native';
import { NotPark } from './NotPark';

class User extends React.Component {
	renderUser() {
		console.log(this.props.parked);
		if (this.props.parked !== true) {
			return (
				<View>
					<NotPark />
				</View>
			);
		} else {
			return (
				<View><Text>Parking info</Text></View>
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
