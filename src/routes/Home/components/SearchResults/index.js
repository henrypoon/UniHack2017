import React from 'react';
import { Text } from 'react-native';
import { View, List, ListItem, Left, Body } from 'native-base';

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './SearchResultsStyles';

export const SearchResults = ({ prediction }) => {
  return (
    <View style={styles.searchResultsWrapper}>
      <List
        dataArray={prediction}
        renderRow={(item) =>
          <View>
            <ListItem button avatar>
              <Left style={styles.leftContainer}>
                <Icon styles={styles.sleftIcon} name='location-on' />
              </Left>
              <Body>
                <Text style={styles.primaryText}>{item}</Text>
              </Body>
            </ListItem>
          </View>
        }
      />
    </View>
  );
};

export default SearchResults;
