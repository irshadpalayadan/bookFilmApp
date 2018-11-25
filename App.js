import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import {TheatreList} from 'app/views/theatreList.js'

import TheatreService from './app/api/theatre'

export default class App extends React.Component {

constructor() {
  super();
  this.date = '01/01/2018';
  this.film = 'odiyan';
  this.loc = 'tvpm';
  this.data;
}
  _onPressButton = () => {
    this.data = TheatreService.getTheatreListByDate(this.film, this.date, this.loc);
  }


  render() {
    //TODO : Remove this when tab switch is introduced
    this._onPressButton();
    return (
      <View style={styles.container}>
        <Button onPress={this._onPressButton} title='runningMovie'/>
        <TheatreList  thetreList={this.data}/>
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
