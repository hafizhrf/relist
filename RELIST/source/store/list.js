import {observable, action} from 'mobx';
import {link} from '../config';
import axios from 'axios';

import { Actions } from 'react-native-router-flux';
export default class List{
  

    constructor(ctx){
        this.ctx = ctx;
    }

    @observable listArray=[];

    @action
    getlistData(){
        console.log('jalannn');
        fetch(`${link}/list/${this.ctx.todo.idTodo}`)
        .then((response) => response.json())
        .then((data) => {
            this.listArray = data.data
        console.log(data.data,'array list')
        })
    }

   @action
   postList(data){
    axios.post(`${link}/list`,data)
    .then((response) => {
        this.getlistData();
        return response;
    })
    .catch(function (error) {
      console.log(error);
    });
   }

   @action
   delAll(){
    axios.delete(`${link}/list/${this.ctx.todo.idTodo}`)
    .then((response) => {
        this.getlistData();
        return response;
    })
    .catch(function (error) {
    console.log(error);
    });
   }
}