import React from 'react';
import { StyleSheet, ActivityIndicator, Text, View } from 'react-native';
import SignIn from './app/screens/signin';

import {TheatreList} from './app/views/theatreList'

import TheatreService from './app/api/theatre'

export default class App extends React.Component {

constructor() {
  super();
}

  render() {
    /*if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/> 
        </View>
      )
    } */
    return (
      <View style={styles.container}>
        <SignIn/>
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
