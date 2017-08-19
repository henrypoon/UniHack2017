import React from 'react';
import { Text, View } from 'react-native';
import { Button, Icon } from 'native-base';
// import { Icon, Button, View } from '@shoutem/ui';
import { Actions } from 'react-native-router-flux';
import styles from './NotParkStyles';

export const NotPark = () => {
  return (
    <View style={styles.searchButton}>
      <Button iconLeft onPress={() => Actions.Map()}>
        <Icon name='navigate' style={{ fontSize: 20, color: 'white' }} />
        <Text>Searh Parking</Text>
      </Button>
      <Button iconLeft onPress={() => Actions.modal()}>
        <Icon name='home' style={{ fontSize: 20, color: 'white' }} />
        <Text>Searh Parking</Text>
      </Button>
    </View>
  );
};

export default NotPark;
