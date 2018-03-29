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
    @observable idTodo = '';
    @observable namaTodo = '';
    @observable isLoading = '';
    @observable dueDate = '';

    @action
    getData(){
        console.log('jalannn');
        this.isLoading = true;
        fetch(`${link}/todo/aktif/${this.ctx.user.userDatas.id}`)
        .then((response) => response.json())
        .then((data) => {
        
            this.todoKu = data.data
            this.isLoading = false;
        console.log(this.todoKu,'array todo')
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
        .then((response) => {
            this.getDatamiss();
            return response;
        })
        //   .then(function (response) {
        //       this.getDatamiss();
        //     console.log(response);
        //   })
          .catch(function (error) {
            console.log(error);
          });
    }


    @action
    postDataKosong(data){
        axios.post(`${link}/todo/kosong`,data)
        .then((response) => {
            this.getDatamiss();
            return response;
        })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    @action
    putData(data){
        axios.put(`${link}/todo/${this.idTodo}`,data)
            .then((response) => {
                this.getDatamiss();
                return response;
            })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    @action
    putDataComplit(data){
        axios.put(`${link}/todo/status/${this.idTodo}`,data)
        .then((response) => {
            this.getDatamiss();
            return response;
        })
          .catch(function (error) {
            console.log(error);
          });
    }

    @action
    delTodo(){
        axios.delete(`${link}/todo/${this.idTodo}`)
        .then((response) => {
            this.getDatamiss();
            return response;
        })
            .catch(function (error) {
            console.log(error);
        });
    }
}