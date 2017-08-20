import React from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Carinfo } from './Carinfo';
import { CurrPark } from './CurrPark';
import styles from './Userstyle';

export const Park = ({carparks,time,DeSetParked}) => {
	console.log(carparks)
  return (
    <View style={ styles.Carinfostyle } >
      <Carinfo />
      <CurrPark carparks={carparks} time={time}/>
    </View>
  );
};

export default Park;
