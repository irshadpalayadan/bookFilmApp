import React, {Component} from 'react';
import { StyleSheet, ScrollView, View, Text} from 'react-native';

const showTimeStyle = StyleSheet.create({
  
      showTimeListStyle: {
        maxWidth: '100%',
        minWidth: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
  
      showTimeStyle: {
        maxWidth:"20%",
        minWidth:"20%",
        margin:"2.5%",
      },
  
      showTimeBorderStyle: {
        borderColor:'#00f',
        borderWidth: 1,
        backgroundColor: '#ff0',
      },
  
  });


class ShowTime extends React.Component{
    render() {
        return(
            <View style={[ showTimeStyle.showTimeStyle, this.props.Time != '' && showTimeStyle.showTimeBorderStyle]}>
              <Text>{this.props.Time}</Text>
            </View>
        );
    }
}

export class ShowTimeList extends React.Component{
    render() {
        return(
            <View style={showTimeStyle.showTimeListStyle}>
            {
                this.props.timeList.map((time) => (
                  <ShowTime Time={time}/>
                ))
            }
            </View>
        );
    }
}
