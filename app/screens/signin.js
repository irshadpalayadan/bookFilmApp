import React, {Component} from 'react';
import { View, Button, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/signinStyle';

class SignIn extends React.Component {

  constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }
    }


    _onValueChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

  

    _submitSignin = () => {
        

    }
    render() {
        return(
            <View style={styles.SignInOutBox}>
                    <form style={styles.SignInOutForm}>
                        <Text style={styles.SignInOutTitle}>Login</Text>
                        <View style={styles.textBlock}>
						    <Text style={styles.textBlockLabel}>Username</Text>
						    <input style={styles.textBlockInput} type="text" name="username" value={this.state.username} onChange = {this._onValueChange}  placeholder="Type your username"></input>
                            <Ionicons style={styles.ionicons}/>
                        </View>
                        <View style={styles.passwordBlock} data-validate="Password is required">
						    <Text style={styles.passBlockLabel}>Password</Text>
						    <input style={styles.passBlockInput} type="password" name="password" value={this.state.password} onChange = {this._onValueChange} placeholder="Type your password"></input>
                            <Ionicons glyph="lock" style={styles.ionicons}/>
					    </View>
                        <View style={styles.forgotPassword}>
                            <Text style={styles.anchorLikeText} >Forgot password? </Text>
					    </View>
                        <Button onClick={() => this._submitSignin()}> Login </Button>
                        
                        <a style={styles.googleSignDiv} >
                            <Text style={styles.googleSignImg}></Text>
                            <Text style={styles.googleSignText}> SignIn With Google</Text>
                        </a>
                        <View style={styles.newUserLink}>
                            <Text style={styles.anchorLikeText} > New User? </Text>
					    </View>
                    </form>
                </View>
        );
    }
}

export default SignIn;