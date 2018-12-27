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
                    <Text> SIGNUP ... </Text>
                </View>

                <View style={styles.signinForm}>

                    <TextInput style={styles.inputText} 
                    placeholder='Username'   
                    placeholderTextColor='rgba(225,225,225,0.8)'
                    autoCapitalize="none" 
                    autoCorrect={false}
                    returnKeyType="next" 
                    onChangeText={(text) => this.setState({username : text})} />

                    <TextInput style={styles.inputText} 
                    placeholder='Mobile'   
                    placeholderTextColor='rgba(225,225,225,0.8)'
                    autoCorrect={false}                     
                    keyboardType='phone-pad' 
                    returnKeyType="next" 
                    onChangeText={(text) => this.setState({username : text})} />
                    
                    <TextInput style={styles.inputText} 
                    placeholder='E-Mail'   
                    placeholderTextColor='rgba(225,225,225,0.8)'
                    autoCapitalize="none" 
                    autoCorrect={false}                     
                    keyboardType='email-address' 
                    returnKeyType="next" 
                    onChangeText={(text) => this.setState({username : text})} />

                    <TextInput style = {styles.inputText}   
                    placeholder='Password' 
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    returnKeyType="next" 
                    onChangeText={(text) => this.setState({password : text})}
                    secureTextEntry/>
                    
                    <TextInput style = {styles.inputText}   
                    placeholder='Re-Enter Password' 
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    returnKeyType="go" 
                    onChangeText={(text) => this.setState({password2 : text})}
                    secureTextEntry/>

                    <Button title="SIGNUP" onPress={this._submitSignin}/>
                </View>
            </View>
        );
    }
}

export default SignIn;