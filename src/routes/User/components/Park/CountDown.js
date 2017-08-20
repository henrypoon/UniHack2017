import CountdownCircle from 'react-native-countdown-circle';
import React from 'react';
import styles from './Userstyle.js';
import { View,Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export const CountDown = ({ DeSetParked}) => {
    return (
        <View style={styles.messageBox}>
        <Text style={styles.messageBoxTitleText}>Current Parking:</Text>
        <View style={styles.timerbox} >
        <CountdownCircle
            seconds={60}
            radius={100}
            borderWidth={20}
            color="#ff003f"
            bgColor="#fff"
            textStyle={{ fontSize: 40 }}
            onTimeElapsed={Actions.home()} />
        </View>
        </View>
    );
};

export default CountDown;
