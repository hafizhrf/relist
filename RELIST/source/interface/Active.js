import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View,AsyncStorage, RefreshControl, FlatList} from 'react-native';
import { Container, Content, Button, ListItem, Icon,List } from 'native-base';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import {link} from '../config';
import Add from './Add';
import {observer, inject} from 'mobx-react/native';


@inject('appstate')
@observer
export default class Active extends Component{

    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            todoKu: [],
            refreshing: false
        }
        this.user = props.appstate.user;
        this.todo = props.appstate.todo;
    }

    onRefresh = () => {
        this.setState({
            refreshing: true
        });
        this.todo.getData().then(() => {
            this.setState({
                refreshing: false
            });
        })
    }
    
    componentDidMount = () => {
        this.todo.getData();
    }

    edit(){
        Actions.edit()
    }

    render(){
        console.log(this.todo.todoKu.peek(),'PEEK');
        return(
            <Container>
                <Content style={styles.form}>
                    <FlatList data={this.todo.todoKu}
                        renderItem={({item: data}) => 
                            <ListItem noBorder style={{marginLeft: 0,paddingBottom: 5, paddingTop: 5, paddingRight: 10, paddingLeft: 10}} >
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableOpacity style={{flex: 1}} onPress={this.edit} >      
                                        <Text style={styles.data}>{data.todo}</Text>
                                    </TouchableOpacity>                                   
                                </View>
                            </ListItem>
                        }
                        keyExtractor={(data, index) => data.id}
                        refreshControl={
                            <RefreshControl
                            refreshing = {this.state.refreshing}
                            onRefresh = {() => this._onRefresh}
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