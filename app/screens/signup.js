import React, {Component} from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import authService from '../api/auth'
import styles from '../styles/signinStyle';
import md5 from 'md5';

/* TODO :   Add validations
            Load component based on privillege
*/

class SignIn extends React.Component {

  constructor() {
        super();
        this.state = {
            username : '',
            phno : '',
            email : '',
            password :'',
            password2 : '',
        }
    }


    _submitSignUp = () => {

        authService.signup(this.state.username, md5(this.state.password), this.state.phno, this.state.email)
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
                    onChangeText={(text) => this.setState({username : text})}
                    onSubmitEditing={() => this.phoneInput.focus()}/>

                    <TextInput style={styles.inputText} 
                    placeholder='Mobile'   
                    placeholderTextColor='rgba(225,225,225,0.8)'
                    autoCorrect={false}                     
                    keyboardType='phone-pad' 
                    returnKeyType="next" 
                    onChangeText={(text) => this.setState({phno : text})}
                    ref={(input)=> this.phoneInput = input}  
                    onSubmitEditing={() => this.emailInput.focus()} />
                    
                    <TextInput style={styles.inputText} 
                    placeholder='E-Mail'   
                    placeholderTextColor='rgba(225,225,225,0.8)'
                    autoCapitalize="none" 
                    autoCorrect={false}                     
                    keyboardType='email-address' 
                    returnKeyType="next" 
                    onChangeText={(text) => this.setState({email : text})}
                    ref={(input)=> this.emailInput = input}  
                    onSubmitEditing={() => this.passwordInput.focus()} />

                    <TextInput style = {styles.inputText}   
                    placeholder='Password' 
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    returnKeyType="next" 
                    onChangeText={(text) => this.setState({password : text})}
                    ref={(input)=> this.passwordInput = input}  
                    onSubmitEditing={() => this.passwordInput2.focus()}
                    secureTextEntry/>
                    
                    <TextInput style = {styles.inputText}   
                    placeholder='Re-Enter Password' 
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    returnKeyType="go" 
                    onChangeText={(text) => this.setState({password2 : text})}
                    ref={(input)=> this.passwordInput2 = input}  
                    secureTextEntry/>

                    <Button title="SIGNUP" onPress={this._submitSignUp}/>
                </View>
            </View>
        );
    }
}

export default SignIn;