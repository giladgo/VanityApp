/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
	Image
} from 'react-native';

class VanityApp extends Component {
  render() {
    return (
      <View style={styles.container}>
				<View style={styles.bgWrapper}>
					<Image style={styles.backgroundImage} source={require('./bg.png')} />
				</View>
        <Text style={styles.title}>
          ALL YOUR $$$ ARE BELONG TO US
				</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
		backgroundColor: 'transparent'
  },
	backgroundImage: {
		resizeMode: 'cover',
		flex: 1,
  },
	bgWrapper: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	}
});

AppRegistry.registerComponent('VanityApp', () => VanityApp);
