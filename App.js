import React from 'react';
import { StyleSheet, ActivityIndicator, Text, View } from 'react-native';
import {TheatreList} from './app/views/theatreList'

import TheatreService from './app/api/theatre'

export default class App extends React.Component {

constructor() {
  super();
  this.date = '01/01/2018';
  this.film = 'odiyan';
  this.loc = 'tvpm';
  this.state = { isLoading: true };
}
  getTheatreData(){
    TheatreService.getTheatreListByDate(this.film, this.date, this.loc)
    .then((response) => response.json())
    .then((responseJson) => {
        this.setState({
          isLoading: true,
          data: responseJson
        },function(){});
    })
    .catch((error) =>{
      console.error(error);
    });
  }


  render() {
    //TODO : Remove this when tab switch is introduced
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <TheatreList  thetreList={this.state.data}/>
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
