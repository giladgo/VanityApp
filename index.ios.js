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

import MarqueeLabel from '@remobile/react-native-marquee-label'


class VanityApp extends Component {
  render() {
    return (
      <View style={styles.container}>
				<View style={styles.bgWrapper}>
					<Image style={styles.backgroundImage} source={require('./bg.png')} />
				</View>
				<MarqueeLabel style={styles.marqueeLabel}
                     text="ALL YOUR $$$ ARE BELONG TO US | ALL YOUR $$$ ARE BELONG TO US"
                     marqueeType="MLContinuous"
                     scrollDuration={3.0}
                     fadeLength={0.0}
                     leadingBuffer={0.0}
                     trailingBuffer={50}
                     textColor='white'
                     font={{fontSize:20, fontWeight: 0.4}}
                     />
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
  marqueeLabel: {
    backgroundColor: 'black',
		flexDirection: 'row',
    alignSelf: 'stretch',
    height: 140
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
