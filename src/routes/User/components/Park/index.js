import React from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Carinfo } from './Carinfo';
import { CurrPark } from './CurrPark';

export const Park = () => {
  return (
    <View >
      <Carinfo />
      <CurrPark />
    </View>
  );
};

export default Park;
