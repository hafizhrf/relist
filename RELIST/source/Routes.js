import React, {Component} from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './login/Login';
import Signup from'./login/Signup';
import RoutesIndex from './RoutesIndex';
import Index from './login/Index';
import Add from './interface/Add';
import Edit from './interface/Edit';

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
                    <Scene key="index" component={Index} type="replace" title="Index" hideNavBar={true} />
                    <Scene key="add" component={Add} navTransparent={true} navBarButtonColor='#fff' title="New Project" />
                    <Scene key="edit" component={Edit} navTransparent={true} navBarButtonColor='#fff' title="Edit Project" />
                </Stack>
            </Router>
        )
    }
}