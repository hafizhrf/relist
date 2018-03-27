import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, Alert,FlatList,RefreshControl } from 'react-native';
import { Container, Content, Icon, Fab, Button, List, ListItem,Footer, FooterTab } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {link} from '../config';
import {observer, inject} from 'mobx-react/native';
import axios from 'axios';

@inject('appstate')
@observer
export default class Edit extends Component{
    
    index(){
        Actions.pop()
    }

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            active: false,
            todoname: '',
            list: '',
            data: []
        };
        this.todo = props.appstate.todo;
        this.lists = props.appstate.list;
    }

    onPressButton = () => {
        let datalist = {
            id_todo: this.todo.idTodo,
            list: this.state.list,
            status: 'Active'
          }
        console.log(this.todo.idTodo)
        this.lists.postList(datalist);
        this.setState({
            list : '',
        })
        Alert.alert('Add Item', 'You add 1 Item')
    }
    
    componentDidMount = () => {
        this.lists.getlistData();
    }

    repres = () =>{
        this.lists.getlistData(); 
    }

    onRefresh = () => {
        this.setState({refreshing: true});
        this.repres();
            this.setState({
                refreshing: false
            });
        
      }
      onPressDelete = () => {
        this.lists.delAll()
        this.todo.delTodo();
        Alert.alert('Success', 'You Deleted this item');
        Actions.reset('index');
    }

    render(){
        console.log(this.lists.listArray.peek(),'PEEK');
        return(
            <Container style={{backgroundColor: 'rgb(48,56,58)'}}>
                <View style={styles.UI}>
                    <TextInput 
                        placeholder={this.todo.namaTodo}
                        placeholderTextColor='#fff'
                        underlineColorAndroid='white'
                        returnKeyType="next"
                        editable={false}
                        onSubmitEditing={() => this.list.focus()}
                        onChangeText={(teks) => this.setState({todoname: teks})}
                        style={styles.todo} />
                </View>
                {/* <View style={styles.list}>
                    <TextInput 
                        placeholder='Write your List here...'
                        placeholderTextColor='#999'
                        underlineColorAndroid='white'
                        returnKeyType="go"
                        onChangeText={(teks) => this.setState({list: teks})}
                        ref={(todo) => this.list =todo}
                        style={styles.input} />
                        <TouchableOpacity onPress={this.onPressButton} style={{backgroundColor: 'white', borderRadius: 25, alignItems: 'center' , justifyContent: 'center' , width: 50, height: 50, marginLeft: 10, marginRight: 10}} onPress={this.onPressButton}>
                            <Icon name="ios-add" style={{color: 'rgb(14,18,21)', fontSize: 34}} />
                        </TouchableOpacity>
                </View> */}
                <Container style={styles.dataList}>
                    <Content style={{flex: 1}}>
                        <ScrollView>
                            <View>
                                <FlatList data={this.lists.listArray}
                                    renderItem={({item: data}) => 
                                    <ListItem noBorder style={{marginLeft: 0,paddingBottom: 5, paddingTop: 5, paddingRight: 10, paddingLeft: 10}} >
                                        <View>     
                                                <Text style={{color: 'white', marginLeft: 5}}><Icon name="md-arrow-dropright" style={{color: 'white' ,fontSize: 16}} /> {data.list}</Text>                                
                                        </View>
                                    </ListItem>
                                    }
                                    keyExtractor={(data, index) => data.id}>
                                </FlatList>
                            </View>
                        </ScrollView>
                    </Content>
                </Container>
                <Fab 
                active={this.state.active}
                direction="up"
                containerStyle={{ }}
                position="bottomRight"
                style={{backgroundColor: 'red'}}
                onPress={() => this.setState({ active: !this.state.active })}>
                <Icon name="md-trash" style={{color: 'white'}} onPress={this.onPressDelete} />
                </Fab>
            </Container>
            
        );
    }
}

const styles = StyleSheet.create({

    UI: {
        flexDirection: 'row',
        position: 'absolute',
        top: 55,
        left: 0
    },

    list: {
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
        top: 85,
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
});