import { StyleSheet } from "react-native"

export default StyleSheet.create({
    
    SignInOutBox : {
        width: '500px',
        background: '#fff',
        borderRadius: '10px',
        overflow: hidden,
        paddingRight: '55px',
        paddingLeft: '55px',
        paddingBottom: '54px',
        paddingTop: '65px',
        display: block,
    },
    
    
    SignInOutForm : {
        width: '100%',
    },
    
    SignInOutTitle : {
        display: block,
        fontFamily: Poppins-Bold,
        fontSize: '39px',
        color: '#333333',
        lineHeight: 1.2,
        textAlign: center,
    },
    
    textBlock : {
        position: relative,
        width: '100%',
        borderBottom: '2px solid #d9d9d9',
        marginBottom: '23px',
    },
    
    textBlockLabel : {
        fontFamily: Poppins-Regular,
        fontSize: '14px',
        color: '#333333',
        lineHeight: 1.5,
        paddingLeft: '7px',
    },
    
    textBlockInput : {
        fontFamily: Poppins-Medium,
        fontSize: '16px',
        color: '#333333',
        lineHeight: 1.2,
        display: block,
        width: '100%',
        height: '55px',
        background: transparent,
        padding: '0 7px 0 43px',
        outline: none,
        border: none,
        overflow: visible,
    },
    
    ionicons : {
        position: absolute,
        display: block,
        width: '100%',
        height: '100%',
        top: '40px',
        left: '15px',
        pointerEvents: none,
    },
    
    
    passwordBlock : {
        width: '100%',
        position: relative,
        borderBottom: '2px solid #d9d9d9',
        marginBottom: '23px',
    },
    
    
    passBlockLabel : {
        fontFamily: Poppins-Regular,
        fontSize: '14px',
        color: '#333333',
        lineHeight: 1.5,
        paddingLeft: '7px',
    },
    
    passBlockInput : {
        fontFamily: Poppins-Medium,
        fontSize: '16px',
        color: '#333333',
        lineHeight: 1.2,
        display: block,
        width: '100%',
        height: '55px',
        background: transparent,
        padding: '0 7px 0 43px',
        outline: none,
        border: none,
        overflow: visible,
    },
    
    forgotPassword : {
        textAlign: 'right!important',
        paddingBottom: '31px',
        paddingTop: '8px',
    },

    anchorLikeText : {
        cursor:pointer,
        color: '#337ab7',
    },
        
    googleSignDiv : {
        marginTop: '80px',
        display: inline-block,
        background: white,
        color: '#444',
        width: '190px',
        borderRadius: '5px',
        border: 'thin solid #888',
        boxShadow: '1px 1px 1px grey',
        whiteSpace: nowrap,
    },
    
    googleSignImg : {
        background: "url('../../img/g-normal.png') transparent 5px 50% no-repeat",
        display: inline-block,
        verticalAlign: middle,
        width: '42px',
        height: '42px',
    },
    
    googleSignText : {
        display: inline-block,
        verticalAlign: middle,
        fontSize: '14px',
        fontWeight: bold,
        fontFamily: 'Roboto'
    },
    
    loginbutton : {
        padding: '5px 40px',
    },
    
    newUserLink : {
        position: relative,
        top: '50px',
        display: block,
        textAlign: center,
    }
    
    
});