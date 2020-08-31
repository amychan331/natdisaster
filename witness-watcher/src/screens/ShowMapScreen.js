import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

// import Map from '../components/Map';

const ShowMapScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text h1>Map Screen</Text>
      </View>
      <View>
        <Text>Messages Component</Text>
      </View>
    </ScrollView>
  );
};

ShowMapScreen.navigationOptions = {
  title: 'Show Map',
  tabBarIcon: <FontAwesome name="plus" size={20} />
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ShowMapScreen;
