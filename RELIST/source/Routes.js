import React, {Component} from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './login/Login';
import Signup from'./login/Signup';

export default class Routes extends Component {
    static navigationOptions ={
        header: null
    }
    render(){
        return(
            <Router>
                <Stack key="root" >
                    <Scene key="login" component={Login} title="Login" />
                    <Scene key="signup" component={Signup} title="Sign Up" />
                </Stack>
            </Router>
        )
    }
}