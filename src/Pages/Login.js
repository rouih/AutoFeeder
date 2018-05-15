import React from 'react';
import { StyleSheet, Text, View, StatusBar,  TouchableOpacity} from 'react-native';

import Logo from '../Components/Logo';
import Form from '../Components/Form';
import {Actions} from 'react-native-router-flux';

export default class Login extends React.Component { 
    signup() {
        Actions.signup();
   }
    render(){
      
        return (
            <View styles={styles.container}>
                <Logo/>
                <Form type="Sign In"/>
                <View style={styles.signupTextCont}>
					<Text style={styles.signupText }>Don't have an account yet?</Text>
					<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}>Signup</Text></TouchableOpacity>
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