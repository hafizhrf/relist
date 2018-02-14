import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Container, Content, Button, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import Add from './Add';

export default class Missed extends Component{

    constructor(props){
        super(props);
        this.state = {
            data : ['Hendy', 'Iqbal', 'Nung']
        }
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