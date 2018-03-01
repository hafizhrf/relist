import React, {Component} from 'react';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
export default class Lib extends Component{
    Regis=()=>{
        axios.post('http://192.168.100.16:212/user', {
        username: this.state.userName,
        password: this.state.passWord
    })
    .then(function (response) {
        console.log(response);  
    })
    .catch(function (error) {
        console.log(error);
    });
    Actions.pop()
    }
}
