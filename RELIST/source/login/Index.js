import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Container, Tab, Tabs, Content, Card, CardItem, Body, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

import Active from '../interface/Active';

export default class Index extends Component{
    static navigationOptions = {
        header: null
    }

    add(){
        Actions.add()
    }
    
    render(){
        return(
            <Container style={{backgroundColor: 'rgb(48,56,58)'}}>
                <Tabs  initialPage={0} >
                    <Tab heading = "Active" tabStyle={{backgroundColor: 'rgb(46,56,58)'}} activeTextStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'rgb(46,56,58)'}} textStyle={{color: '#fff'}} >
                        <Active />
                    </Tab>
                    <Tab heading = "Complete" tabStyle={{backgroundColor: 'rgb(46,56,58)'}} activeTextStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'rgb(46,56,58)'}} textStyle={{color: '#fff'}} >
                        <Active />
                    </Tab>
                    <Tab heading = "Missed" tabStyle={{backgroundColor: 'rgb(46,56,58)'}} activeTextStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'rgb(46,56,58)'}} textStyle={{color: '#fff'}} >
                        <ScrollView  style={styles.form}>
                            <Text style={styles.data}>Text</Text>
                            <Text style={styles.data}>Text</Text>
                            <Text style={styles.data}>Text</Text>
                        </ScrollView>
                    </Tab>
                </Tabs>
                <View style={{backgroundColor: 'transparent'}} >
                    <TouchableOpacity style={styles.button} onPress={this.add}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        );  
    }
}

const styles = StyleSheet.create({

    form: {
        flex: 1,
        backgroundColor: 'rgb(46,56,58)',
        paddingVertical: 10
    },

    data: {
        color: '#fff',
        backgroundColor: 'rgb(14,18,21)',
        padding: 20,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 10,
        flexDirection: 'row'
    },

    button: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 50,
        marginBottom: 20,
        marginRight: 20,
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'flex-end',
        position: 'relative',
        bottom: 0,
    },

    buttonText: {
        color: 'black',
        textAlign: 'center',
        marginBottom: 5,
        fontSize: 38,
        fontWeight: '300'
    }
});