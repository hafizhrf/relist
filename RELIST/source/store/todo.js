import {observable, action} from 'mobx';
import {link} from '../config';
import axios from 'axios';

import { Actions } from 'react-native-router-flux';
export default class Todo{
  

    constructor(ctx){
        this.ctx = ctx;
    }

    @observable todoKu = [];
    @observable todoKuKomplit = [];
    @observable todoKuMiss = [];

    @action
    getData(){
        console.log('jalannn');
        fetch(`${link}/todo/aktif/${this.ctx.user.userDatas.id}`)
        .then((response) => response.json())
        .then((data) => {
        
            this.todoKu = data.data
            
        console.log(this.todoKu)
        })
    }

    @action
    getDatakomplit(){
        console.log('jalannn');
        fetch(`${link}/todo/komplit/${this.ctx.user.userDatas.id}`)
        .then((response) => response.json())
        .then((data) => {
        
            this.todoKuKomplit = data.data
            
        console.log(this.todoKuKomplit)
        })
    }

    @action
    getDatamiss(){
        console.log('jalannn');
        fetch(`${link}/todo/miss/${this.ctx.user.userDatas.id}`)
        .then((response) => response.json())
        .then((data) => {
        
            this.todoKuMiss = data.data
            
        console.log(this.todoKuMiss)
        })
    }

    @action
    postData(data){
        axios.post(`${link}/todo`,data)
          .then(function (response) {
            console.log(response);
            this.getData();
          })
          .catch(function (error) {
            console.log(error);
          });
    }
}