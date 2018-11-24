import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {thetreList} from './app/views/theatreList.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <thetreList></thetreList>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
