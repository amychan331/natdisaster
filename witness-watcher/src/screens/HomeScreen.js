import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView forceInset={{ top: 'always' }}>
        <Text h1>Home Screen</Text>
        <Button
          title="Get Map"
          onPress={() => this.props.navigation.navigate('ShowMap')}
        />
      </SafeAreaView>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Home Page',
  tabBarIcon: <FontAwesome name="plus" size={20} />
};

// const styles = StyleSheet.create({

// });

export default HomeScreen;
