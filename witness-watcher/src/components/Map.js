import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

import { MAPBOX_TOKEN } from 'react-native-dotenv';
ApiClient.init(MAPBOX_TOKEN);


MapboxGL.setAccessToken(
  MAPBOX_TOKEN,
);

export default Map App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: [-73.99155, 40.73581],
    };
  }

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map}>
            <MapboxGL.Camera
              zoomLevel={8}
              centerCoordinate={this.state.coordinates}
            />
            <MapboxGL.PointAnnotation coordinate={this.state.coordinates} />
          </MapboxGL.MapView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'blue',
  },
  map: {
    flex: 1,
  },
});