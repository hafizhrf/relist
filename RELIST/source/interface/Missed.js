import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, FlatList} from 'react-native';
import { Container, Content, Button, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import Add from './Add';
import {observer, inject} from 'mobx-react/native';


@inject('appstate')
@observer
export default class Missed extends Component{

    constructor(props){
        super(props);
        this.state = {
            data : ['Coming Soon']
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

    edit(){
        Actions.edit()
    }
    componentDidMount = () => {
        this.todo.getDatamiss();
    }
    render(){
        return(
            <Container>
                <Content style={styles.form}>
                <Text style={styles.coming}> Coming Soon </Text>
                <FlatList data={this.todo.todoKuMiss}
                        renderItem={({item: data}) => 
                            <ListItem noBorder style={{marginLeft: 0,paddingBottom: 5, paddingTop: 5, paddingRight: 10, paddingLeft: 10}} >
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableOpacity style={{flex: 1}} onPress={this.edit}>      
                                        <Text style={styles.data}>{data.todo}</Text>
                                    </TouchableOpacity>                                   
                                </View>
                            </ListItem>
                        }
                        keyExtractor={(item, index) => index}
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
    coming: {
        color: '#999',
        fontSize: 34,
        textAlign: 'center',
        fontStyle: 'italic'
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