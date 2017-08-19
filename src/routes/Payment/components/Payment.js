import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RkButton } from 'react-native-ui-kitten';
import DateTimePicker from 'react-native-modal-datetime-picker';
import TimePicker from './TimePicker';

class Payment extends React.Component {
	render() {
		console.log(this.props.showDatePicker);
		return (
			<View style={styles.containers}>
        <Text
					style={styles.text}
					onPress={() => Actions.pop()}
				>
				Payment
				</Text>
				<RkButton rkType='success'>Accept</RkButton>
				<RkButton rkType='danger' onPress={() => Actions.list()}>Cancel</RkButton>
				<RkButton rkType='success' onPress={this.props.displayDatePicker}>Choose time</RkButton>
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
