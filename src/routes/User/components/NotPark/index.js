import React from 'react';
import { Text, View } from 'react-native';
import { Button, Icon } from 'native-base';
// import { Icon, Button, View } from '@shoutem/ui';
import { Actions } from 'react-native-router-flux';
import styles from './NotParkStyles';
import { RkButton } from 'react-native-ui-kitten';

export const NotPark = () => {
  return (
  	<View style={styles.container}>
	    <View style={styles.buttonbox}>
	      <RkButton rkType='xlarge' onPress={() => Actions.Map()}>
	        <Icon name='navigate' style={{ fontSize: 30, color: 'white' }} />
	        <Text style={{ fontSize: 30 }}>Searh Parking</Text>
	      </RkButton>
	    </View>
	</View>
  );
};

export default NotPark;
