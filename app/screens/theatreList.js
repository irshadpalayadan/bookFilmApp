import React, {Component} from 'react';
import { StyleSheet, ScrollView, View, Text} from 'react-native';


import {ShowTimeList} from './showTimeList'
import {TheatreDetail} from './theatreDetail'


const theatreStyle = StyleSheet.create({
  theatreStyle: {
    minWidth:"92%",
    maxWidth:"92%",
    margin: 10,
    borderColor:'#f00',
    borderWidth: 1
    },

});

class Theatre  extends React.Component{
    render() {
        return(
            <View style={theatreStyle.theatreStyle}>
                <TheatreDetail details={[this.props.theatre.name, this.props.theatre.place, this.props.theatre.rate]}/>
                <ShowTimeList timeList={this.props.theatre.shows}/>
            </View>
        );
    }
}


export class TheatreList extends React.Component{
  constructor(props) {
    super(props);
  }
    render() {
        return(
                <ScrollView>
                    {
                      this.props.thetreList.map((theatre) => (
                       <Theatre theatre={theatre}/>
                      ))
                    }
                </ScrollView>
        );
    }
}

