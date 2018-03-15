import React, { Component } from 'react';
import {Alert,ScrollView, View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Fab, Icon, List, ListItem, Footer, FooterTab, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { link } from '../config';
import index from '../login/Index';
import axios from 'axios';
import {observer, inject} from 'mobx-react/native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'


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
            refreshing: false,
            isVisible: false,
            chosenDate: ''
        };
        this.user = props.appstate.user;
        this.todo = props.appstate.todo;
    }

    addTodo = () => {
        let data = {
            id_user: this.user.userDatas.id,
            todo: this.state.todoname,
            duedate: this.todo.dueDate,
            createdat: '',
            status: 'Active'
          }

          this.todo.postData(data);
            this.todo.getData();
            Alert.alert('Save Item', 'You saving this item')
            Actions.reset('index');
          

         
    }

    onPressButton =()=>{
        let data = {
            list: this.state.list,
            status: 'Active'
          }
        this.setState({
            list : '',
        })
    }

    onPressSave(){
        Alert.alert('Save Item', 'You saving this item')
    }

    handlePicker = (datetime) => {
        this.setState({
            isVisible: false,
            chosenDate: moment(datetime).format('MMMM, Do YYYY HH:mm')
        })
        this.todo.dueDate = moment(datetime).format('MMMM, Do YYYY HH:mm')
        console.log(this.todo.dueDate);
    }

    hidePicker = () => {
        this.setState({
            isVisible: false
        })
    }

    showPicker = () => {
        this.setState({
            isVisible: true
        })
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
                        onChangeText={(teks) => this.setState({todoname: teks})} 
                        style={styles.todo} />
                </View>
                <View style={styles.date}>
                    <Text style={styles.text}>
                        {this.state.chosenDate}
                    </Text>
                </View>
               
                {/* <View style={styles.list}>
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
                </View> */}
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
                <Footer>
                    <FooterTab>
                     <DateTimePicker
                          isVisible={this.state.isVisible}
                          onConfirm={this.handlePicker}
                          onCancel={this.hidePicker}
                          mode={'datetime'}
                          is24Hour={true} />
                        <Button full active transparent light onPress={() => this.showPicker()} style={{backgroundColor: 'rgb(46,56,58)'}}>
                            <Icon name="ios-alarm-outline" />
                                <Text style={{color: 'white'}}>Reminder</Text>
                        </Button>
                    </FooterTab>
                </Footer>
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

    date: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        marginTop: 10,
        top: 110,
        left: 0
    },
     text: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        marginBottom: 100,
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
        width: 250,
        height: 50,
        backgroundColor: '#330066',
        borderRadius: 30,
        justifyContent:'center',
        marginTop: 15,
    },
});