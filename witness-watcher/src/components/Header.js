import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Text } from 'react-native-elements';
import { Spacer } from './Spacer';

const Header = ({ navigation, routeName, linkDescription }) => {
  return (
    <View>
      <Text h1 style={styles.title}>
        Witness Finder
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Spacer>
          <Text style={styles.link}>{linkDescription}</Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: '16',
    color: 'firebrick'
  },
  link: {
    color: 'blue'
  }
});

export default withNavigation(Header);
