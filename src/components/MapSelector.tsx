import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';


const MapSelector = ({ longitude, latitude, style }) => {
  return (
    <MapView
      style={style}
      initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default MapSelector;
