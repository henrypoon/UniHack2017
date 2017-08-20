import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RkButton } from 'react-native-ui-kitten';
import DateTimePicker from 'react-native-modal-datetime-picker';
import TimePicker from './TimePicker';

class Payment extends React.Component {
	render() {
		return (
			<View style={styles.containers}>
        <Text
					style={styles.text}
					onPress={() => Actions.pop()}
				>
				Payment
				</Text>
				<RkButton rkType='success xlarge' style={styles.buttonStyle} onPress={this.props.userConfirm}>Accept</RkButton>
				<RkButton rkType='danger xlarge' style={styles.buttonStyle} onPress={() => Actions.pop()}>Cancel</RkButton>
				<RkButton rkType='warning xlarge' style={styles.buttonStyle} onPress={this.props.displayDatePicker}>Choose time</RkButton>
				<View style={{ flex: 1 }}>
					<TimePicker
						show={this.props.showDatePicker}
						closeDatePicker={this.props.closeDatePicker}
						getDate={this.props.getDate}
					/>
				</View>
      </View>
		);
	}
}

const styles = StyleSheet.create({
	buttonStyle: {
		top: 60
	},
	containers: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FF8200'
	},
	textStyle: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: '#ffffff'
	}
});

export default Payment;
