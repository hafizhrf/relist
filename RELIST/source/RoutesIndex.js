import React, {Component} from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Index from './login/Index';
import Add from './interface/Add';


export default class RoutesIndex extends Component {
    static navigationOptions = {
        header: null,
    }
    render(){
        return(
            <Router>
                <Stack key="root">
                    <Scene key="index" component={Index} title="Index" />
                    <Scene key="add" component={Add} title="Add" />
                </Stack>
            </Router>
        )
    }
}