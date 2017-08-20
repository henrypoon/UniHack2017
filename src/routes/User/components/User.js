import React from 'react';
import { View, Text } from 'react-native';
import { NotPark } from './NotPark';
import { Park } from './Park';
import styles from './NotPark/NotParkStyles.js';

class User extends React.Component {
	renderUser() {
		if (!this.props.parked) {
			return (
				<View style={styles.container} >
					<NotPark />
				</View>
			);
		} else {
			return (
				<View>
					<Park carparks={this.props.carparks} time={this.props.time} DeSetParked={this.props.DeSetParked}/>
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
