import {observable, action} from 'mobx';
import {link} from '../config';
import {
    Alert,
    View,
    StyleSheet,
    Text,
    TextInput,
    Keyboard,
    Button,
    KeyboardAvoidingView,
    TouchableNativeFeedback,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
export default class User{
    @observable userDatas = {
        username: '',
        id: '', 
    }

    constructor(ctx){
        this.ctx = ctx;
    }

    @action 
    login(userName, passWord) {
        console.log('Bisa');
        fetch(`${link}/user/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: userName,
                password: passWord
            })
        })
        .then((response) => response.json())
        .then (async (res) => {
            console.log(JSON.stringify(res));
            if (res.message === 'connected'){
                this.userDatas.username = res.data.username;
                this.userDatas.id = res.data.id;
                Actions.reset('index');
            }
            else{
                Alert.alert('',res.message);
            }
        })
        .done();
    }
    @action
    regis(user, pass){
        console.log('Bisa');
        fetch(`${link}/user/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user,
                password: pass
            })
        })
        .then((response) => response.json())
        .then (async (res) => {
            console.log(JSON.stringify(res));
            Actions.pop()
        })
        .done();
    }
}