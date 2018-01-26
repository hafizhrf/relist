import React, {Component} from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './login/Login';
import Signup from'./login/Signup';
import Index from './login/Index';

export default class Routes extends Component {
    static navigationOptions ={
        header: null
    }
    render(){
        return(
            <Router>
                <Stack key="root" hideNavBar={true} >
                    <Scene key="login" component={Login} title="Login" />
                    <Scene key="signup" component={Signup} title="Sign Up" />
                    <Scene key="index" component={Index} title="Index" />
                </Stack>
            </Router>
        )
    }
}