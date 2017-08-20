import React from 'react';
import { View } from '@shoutem/ui';
import MapView from 'react-native-maps';
import styles from './MapContainerStyles';
import SearchBox from '../SearchBox';
import SearchResults from '../SearchResults';

const MapContainer = ({ region, getInputData, getLocationPrediction, prediction, getRegion }) => {

  const onRegionChangeComplete = (newRegion) => {
    getRegion({
      region: newRegion
    });
  };

  return (
    <View style={styles.containers}>
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
      >
        <MapView.Marker
          coordinate={region}
          pinColor='green'
        />
      </MapView>
    </View>
  );
};

export default MapContainer;
