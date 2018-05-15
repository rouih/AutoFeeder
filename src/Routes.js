import React, { Component } from 'react';
import {
    Router,Stack,Scene
}from 'react-native-router-flux'

import Login from './Pages/Login'
import Signup from './Pages/Signup'

export default class Routes extends Component{
    render(){
        return (
            <Router>
            <Stack key="root" hideNavBar={true}>
              <Scene key="Login" component={Login} title="Login" initial={true}/>
              <Scene key="signup" component={Signup} title="Register"/>
            </Stack>
         </Router> 
        )
        }
    }
