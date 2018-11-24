import React, {Components} from 'react';
import { ScrollView, View, Text} from 'react-native';

class showTime {
    render() {
        return(
            <View></View>
        );
    }
}
class theatre{
    render() {
        return(
            <View>
                <Text>Cenepolis</Text>
                <Text>90%</Text>
                <Text>center square mall</Text>
                <showTime>10.15 AM</showTime>
                <showTime>12.15 PM</showTime>
                <showTime>3.15 PM</showTime>
            </View>
        );
    }
}

export class thetreList extends Components{
    render() {
        return(
                <ScrollView>
                    <theatre></theatre>
                </ScrollView>
        );
    }
}

