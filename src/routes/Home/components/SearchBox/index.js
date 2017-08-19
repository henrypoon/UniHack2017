import React from 'react';
import { Text } from 'react-native';
import { View, InputGroup, Input } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './SearchBoxStyles';

export const SearchBox = ({ getInputData, getLocationPrediction }) => {

  const handleInput = (key, val) => {
    getInputData({
      key,
      value: val
    });
    getLocationPrediction();
  };

  return (
    <View style={styles.searchBox}>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Search Parking</Text>
        <InputGroup>
          <Icon name='search' size={15} color='#FF5E3A' />
          <Input
            style={styles.inputSearch}
            placeholder='Enter your destination'
            onChangeText={handleInput}
          />
        </InputGroup>
      </View>
    </View>
  );
};

export default SearchBox;
