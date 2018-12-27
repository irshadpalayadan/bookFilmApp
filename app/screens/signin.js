import React, {Component} from 'react';
import { View } from 'react-native';

class SignIn extends React.Component {
    render() {
        return(
            <View className='SignInOutBox'>
                    <form className='SignInOutForm'>
                        <span className='SignInOutTitle'>Login</span>
                        <View className="textBlock" data-validate="Username is reauired">
						    <span className="textBlockLabel">Username</span>
						    <input className="textBlockInput" type="text" name="username" value={this.state.username} onChange = {this._onValueChange}  placeholder="Type your username"></input>
                            <Glyphicon glyph="user" className="glyph"/>
                        </View>
                        <View className="passwordBlock" data-validate="Password is required">
						    <span className="passBlockLabel">Password</span>
						    <input className="passBlockInput" type="password" name="password" value={this.state.password} onChange = {this._onValueChange} placeholder="Type your password"></input>
                            <Glyphicon glyph="lock" className="glyph"/>
					    </View>
                        <View className="forgotPassword">
                            <span className='anchorLikeSpan' >Forgot password? </span>
					    </View>
                        <Button onClick={() => this._submitSignin()}> Login </Button>
                        <br></br>
                        <a className='googleSignDiv' href={loginService.google}>
                            <span className='googleSignImg'></span>
                            <span className='googleSignText'> SignIn With Google</span>
                        </a>
                        <View className="newUserLink">
                            <span className='anchorLikeSpan' onClick={ () => _sideBoxStateHandler('signup') } > New User? </span>
					    </View>
                    </form>
                </View>
        );
    }
}

export default SignIn;