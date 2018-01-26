import React, {Component} from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Index from './interface/Index';


export default class RoutesIndex extends Component {
    static NavigationOptions = {
        header: null,
    }
    render(){
        return(
            <Router>
                <Stack key="root">
                    <Scene key="index" component={Index} title="Index" />
                    
                </Stack>
            </Router>
        );
    }
}