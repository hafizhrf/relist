import React, {Component} from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Index from './login/Index';
import Add from './interface/Add';
import Edit from './interface/Edit';


export default class RoutesIndex extends Component {
    static navigationOptions = {
        header: null,
    }
    render(){
        return(
            <Router>
                <Stack key="root">
                    <Scene key="index" component={Index} title="Index" hideNavBar={true} />
                    <Scene key="add" component={Add} navTransparent={true} navBarButtonColor='#fff' title="New Project" />
                    <Scene key="edit" component={Edit} navTransparent={true} navBarButtonColor='#fff' title="Edit Project" />
                </Stack>
            </Router>
        )
    }
}