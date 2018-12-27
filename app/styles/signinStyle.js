import { StyleSheet } from "react-native"

export default StyleSheet.create({
    
    signinBox : {
        width: '100%',
        flex: 1,
        backgroundColor: '#2c3e50',
    },

    signinAppLogo : {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },

    logo : {
        position: 'absolute',
        width: 300,
        height: 100
    },
    
    signinForm : {
        width: '100%',
        padding: 20
    },

    inputText : {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
});