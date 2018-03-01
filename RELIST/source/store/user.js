import {observable, action} from 'mobx';
import {link} from '../config';

export default class User{
    @observable userDatas = {
        username: '',
        id: '', 
    }

    constructor(ctx){
        this.ctx = ctx;
    }

    @action doLogin(uname, pw){
        fetch(`${link}/user/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: uname,
                password: pw
            })
        })
        .then((response) =>{
            return response.json()
        }).catch(err => {throw err;});
    }

}