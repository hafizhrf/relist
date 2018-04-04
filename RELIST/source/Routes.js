import React, {Component} from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './login/Login';
import Signup from'./login/Signup';
import Profile from'./login/Profile';
import About from'./login/About';
import RoutesIndex from './RoutesIndex';
import Index from './login/Index';
import Add from './interface/Add';
import Edit from './interface/Edit';
import EditComplete from './interface/Editcomplete';

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
                    <Scene key="profile" component={Profile} title="Profile" />
                    <Scene key="about" component={About} title="About" />
                    <Scene key="index" component={Index} type="replace" title="Index" hideNavBar={true} />
                    <Scene key="add" component={Add} navTransparent={true} navBarButtonColor='#fff' title="New Project" />
                    <Scene key="edit" component={Edit} navTransparent={true} navBarButtonColor='#fff' title="Edit Project" />
                    <Scene key="editcomplete" component={EditComplete} navTransparent={true} navBarButtonColor='#fff' title="Edit Project" />
                </Stack>
            </Router>
        )
    }
}