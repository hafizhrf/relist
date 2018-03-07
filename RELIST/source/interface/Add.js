import React, { Component } from 'react';
import {Alert,ScrollView, View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Fab, Icon, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { link } from '../config';
import index from '../login/Index';
import axios from 'axios';
import {observer, inject} from 'mobx-react/native';

@inject('appstate')
@observer
export default class Add extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            // active: false,
            data: [],
            todoname: '',
            list: '',
            refreshing: false
        };
        this.user = props.appstate.user;
        this.todo = props.appstate.todo;
    }

    addTodo = () => {
        let data = {
            id_user: this.user.userDatas.id,
            todo: this.state.todoname,
            duedate: '',
            createdat: '',
            status: 'Active'
          }

          this.todo.postData(data);
            this.todo.getData();
            Alert.alert('Save Item', 'You saving this item')
            Actions.reset('index');
          

         
    }

    onPressButton =()=>{
        let data = this.state.data;
        data.push({
            name : this.state.list
        })
        this.setState({
            list : '',
            data : data
        })
    }

    onPressSave(){
        Alert.alert('Save Item', 'You saving this item')
    }

    render(){
        return(
            <Container style={styles.container}>
                <View style={styles.UI}>
                    <TextInput 
                        placeholder='Create your Project Todo here...'
                        placeholderTextColor='#999'
                        underlineColorAndroid='white'
                        returnKeyType="next"
                        onSubmitEditing={() => this.list.focus()}
                        onChangeText={(teks) => this.setState({todoname: teks})} 
                        style={styles.todo} />
                </View>
                <View style={styles.list}>
                    <TextInput 
                        placeholder='Write your List here...'
                        placeholderTextColor='#999'
                        underlineColorAndroid='white'
                        returnKeyType="go"
                        onChangeText={(teks) => this.setState({list: teks})} 
                        value={this.state.list}
                        ref={(todo) => this.list =todo}
                        style={styles.input} />
                        <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 25, alignItems: 'center' , justifyContent: 'center' , width: 50, height: 50, marginLeft: 10, marginRight: 10}} onPress={this.onPressButton}>
                            <Icon name="ios-send-outline" style={{color: 'rgb(14,18,21)', fontSize: 28}} />
                        </TouchableOpacity>
                </View>
                <Container style={styles.dataList}>
                    <Content style={{flex: 1}}>
                        <ScrollView>
                            <View>
                                <List dataArray={this.state.data}
                                    renderRow={(data) =>
                                        <ListItem noBorder>
                                            <View>
                                                <Text style={{color: 'white', flex: 1}}>{data.name}</Text>
                                            </View>
                                        </ListItem>    
                                    }>
                                </List>
                            </View>
                        </ScrollView>
                    </Content>
                </Container>
                <Fab position="bottomRight" style={{backgroundColor: '#2196f3'}} onPress={this.addTodo} >
                    <Icon name="md-done-all" style={{color: 'white', fontSize: 30}} />
                </Fab>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(48,56,58)'
    },

    UI: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        top: 55,
        left: 0
    },

    list: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        marginTop: 10,
        top: 110,
        left: 0
    },

    dataList: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        top: 160,
        left: 0
    },

    todo: {
        flex: 1,
        color: '#fff',
        paddingHorizontal: 16,
        borderRadius: 25,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
    },

    input: {
        flex: 1,
        color: '#fff',
        paddingHorizontal: 16,
        borderRadius: 25,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,  
    },

    lines: {
        flex: 1,
        color: '#fff',
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 20,
        alignItems: 'stretch'
    },

    button: {
        width: 40,
        height: 40,
        marginRight: 20,
        marginBottom: 20,
    },
});