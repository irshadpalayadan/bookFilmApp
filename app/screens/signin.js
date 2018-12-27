import React, {Component} from 'react';
import { View, Button, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import authService from '../api/auth'
import styles from '../styles/signinStyle';

class SignIn extends React.Component {

;  constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }
    }


    _submitSignin = () => {

        authService.signin()
        .then(res => res.json())
        .then((resJson) => {
            console.log(resJson);
        })
    }


    render() {
        return(
            <View style={styles.signinBox}>
                <View style={styles.signinAppLogo}>
                    <Text> Hello </Text>
                </View>

                <View style={styles.signinForm}>

                    <TextInput style={styles.inputText} 
                    placeholder='Username Or Email or Mobile'   
                    placeholderTextColor='rgba(225,225,225,0.8)'
                    autoCapitalize="none" 
                    autoCorrect={false}                     
                    keyboardType='email-address' 
                    returnKeyType="next" 
                    onChangeText={(text) => this.setState({username : text})}
                    onSubmitEditing={() => this.passwordInput.focus()} />

                    <TextInput style = {styles.inputText}   
                    placeholder='Password' 
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    returnKeyType="go" 
                    onChangeText={(text) => this.setState({password : text})}
                    secureTextEntry/>

                    <Button title="SIGNIN" onPress={this._submitSignin}/>
                </View>
            </View>
        );
    }
}

export default SignIn;