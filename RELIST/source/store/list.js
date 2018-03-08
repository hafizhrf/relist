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
        console.log(this.listArray,'array list')
        })
    }

   @action
   postList(data){
    axios.post(`${link}/list`,data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
   }
}