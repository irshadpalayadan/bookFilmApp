import React, {Component} from 'react';
import { StyleSheet, ScrollView, View, Text} from 'react-native';


import {ShowTimeList} from './showTimeList'
import {TheatreDetail} from './theatreDetail'


const theatreStyle = StyleSheet.create({
  theatreStyle: {
    minWidth:"90%",
    maxWidth:"90%",
    margin:"5%",
    borderColor:'#f00',
    borderWidth: 1
    },

});

class Theatre  extends React.Component{
    render() {
        return(
            <View style={theatreStyle.theatreStyle}>
                <TheatreDetail details={["Cenepolis", "center square mall", "90"]}/>
                <ShowTimeList timeList={["10.15 AM", "12.15 PM", ""]}/>
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
                    <Theatre/>
                </ScrollView>
        );
    }
}

