import React from 'react';
import { Text, View } from 'react-native';
import { RkCard } from 'react-native-ui-kitten';
import CountDown from './CountDown.js';

export const CurrPark = ({carparks,time,DeSetParked}) => {

  return (
	<RkCard rkType='shadowed'>
	  <CountDown />
	</RkCard>
  );
};

export default CurrPark;
