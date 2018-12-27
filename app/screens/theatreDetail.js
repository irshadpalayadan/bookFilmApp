import React, {Component} from 'react';
import { StyleSheet, ScrollView, View, Text} from 'react-native';


const theatreDetailStyle = StyleSheet.create({
  
    theatreDetailStyle : {
      margin: 10,
      flexDirection: 'row',
    },
    
    theatreNamesBoxStyle : {
      minWidth: '90%',
      maxWidth: '90%',
    },

    theatreNameStyle : {
      fontWeight: 'bold',
    },
});



export class TheatreDetail extends React.Component{
  render() {
    return(
        <View style={theatreDetailStyle.theatreDetailStyle}>
          <View style={theatreDetailStyle.theatreNamesBoxStyle}>
            <Text style={theatreDetailStyle.theatreNameStyle}>{this.props.details[0]}</Text>
            <Text>{this.props.details[1]}</Text>
          </View>
          <View>
            <Text>{this.props.details[2]}%</Text>
          </View>
        </View>
    );
  }
}