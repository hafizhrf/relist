import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, FlatList, RefreshControl} from 'react-native';
import { Container, Content, Button, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Add from './Add';
import {observer, inject} from 'mobx-react/native';


@inject('appstate')
@observer
export default class Complete extends Component{

    constructor(props){
        super(props);
        this.state = {
            refreshing : false
        }
        this.user = props.appstate.user;
        this.todo = props.appstate.todo;     
    }

    // componentDidMount(){
    //     axios.get('http://192.168.100.13:212/todo')
    //         .then(function(res){
    //             console.log(res.data.data);
    //         })
    //         .catch(function(err){
    //             console.log(err);
    //         });
    //     }

    edit = (data) => {
        this.todo.namaTodo = data.todo;
        this.todo.idTodo = data.id;
        this.todo.dueDate = data.duedate;
        Actions.editcomplete()
        console.log(this.todo.namaTodo);
    }

    onRefresh = () => {
        this.setState({
            refreshing: true
        });
        this.todo.getDatamiss()
            this.setState({
                refreshing: false
            });
    }

    componentDidMount = () => {
        this.todo.getDatamiss();
    }
    render(){
        return(
            <Container>
                <Content style={styles.form}
                        refreshControl={
                            <RefreshControl
                            refreshing = {this.state.refreshing}
                            onRefresh = {() => this.onRefresh}
                            />
                        }>
                <FlatList data={this.todo.todoKuMiss.filter(item => item.status == "Missed")}
                        renderItem={({item: data}) => 
                            <ListItem noBorder style={{marginLeft: 0,paddingBottom: 5, paddingTop: 5, paddingRight: 10, paddingLeft: 10}} >
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableOpacity style={{flex: 1}} onPress={()=>this.edit(data)} >      
                                        <Text style={styles.data}>{data.todo}</Text>
                                    </TouchableOpacity>                                   
                                </View>
                            </ListItem>
                        }
                        keyExtractor={(data, index) => data.id}
                        refreshControl={
                            <RefreshControl
                            refreshing = {this.state.refreshing}
                            onRefresh = {() => this.onRefresh}
                            />
                        }
                        >
                    </FlatList>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        backgroundColor: 'rgb(46,56,58)',
    },

    del: {
        width: 30,
        height: 30,
    },

    data: {
        color: '#fff',
        backgroundColor: 'rgb(14,18,21)',
        padding: 20,
        borderRadius: 10,
    }
});