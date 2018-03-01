import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View,AsyncStorage } from 'react-native';
import { Container, Content, Button, List, ListItem, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import {link} from '../config';
import {observer, inject} from 'mobx-react/native';
import Add from './Add';

@inject('appstate')
@observer
export default class Active extends Component{

    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            data : ['Randy', 'Hafizh', 'Simon', 'Randy', 'Hafizh', 'Simon', 'Randy', 'Hafizh', 'Simon','Randy', 'Hafizh', 'Simon', 'Randy', 'Hafizh', 'Simon', 'Randy', 'Hafizh', 'Simon']
        }
        this.user = props.appstate.user;
    }

    
    componentDidMount = () => {
        axios.get(`${link}/todo/33`)
        .then(function (res) {
            console.log(JSON.stringify(this.user.userDatas.id));
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    edit(){
        Actions.edit()
    }

    render(){
        return(
            <Container>
                <Content style={styles.form}>
                    <List dataArray={this.state.data}
                        renderRow={(data) => 
                            <ListItem noBorder style={{marginLeft: 0,paddingBottom: 5, paddingTop: 5, paddingRight: 10, paddingLeft: 10}}>
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableOpacity style={{flex: 1}} onPress={this.edit}>      
                                        <Text style={styles.data}>{data}</Text>
                                    </TouchableOpacity>                                   
                                </View>
                            </ListItem>
                        }>
                    </List>
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