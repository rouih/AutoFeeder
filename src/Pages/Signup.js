import React from 'react';
import { StyleSheet, Text, View, StatusBar,  TouchableOpacity} from 'react-native';

import Logo from '../Components/Logo';
import Form from '../Components/Form';
import SignupForm from '../Components/SignupForm'
export default class Login extends React.Component { 
    render(){
        return (
            <View styles={styles.container}>
                <Logo/>
                <SignupForm type="Sign Up"/>
                <View style={styles.signupTextCont}>
					<Text style={styles.signupText }>Already Registred?</Text>
					<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}>Sign in</Text></TouchableOpacity>
				</View>
           </View>
        )
            
        
    }
}

const styles = StyleSheet.create({
    container : {
      backgroundColor: '#00838f',
      flex: 1,
      alignItems:'center',
      justifyContent:'center'
    },
    signupButton: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500',
        width:70
    },
    signupTextCont: {
        flexGrow: 4,
        alignItems:'center',
        justifyContent:'flex-end',
        marginVertical:16,
    }
  });