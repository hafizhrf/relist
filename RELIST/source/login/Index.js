import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Container, Tab, Tabs, Content, Card, CardItem, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';

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
                <Tabs initialPage={0}>
                    <Tab heading = "Active" tabStyle={{backgroundColor: 'rgb(46,56,58)'}} activeTextStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'rgb(14,18,21)'}} textStyle={{color: '#fff'}} >
                        <ScrollView  style={styles.form}>
                            <Text style={styles.data}>Randy</Text>
                            <Text style={styles.data}>Hafizh</Text>
                            <Text style={styles.data}>Simon</Text>
                            <Text style={styles.data}>Khautal</Text>
                            <Text style={styles.data}>Alvin</Text>
                            <Text style={styles.data}>Adrian</Text>
                            <Text style={styles.data}>Iqbal</Text>
                            <Text style={styles.data}>Reza</Text>
                            <Text style={styles.data}>Hendy</Text>
                            <Text style={styles.data}>Dhika</Text>
                            <Text style={styles.data}>Davi</Text>
                            <Text style={styles.data}>Eko</Text>
                            <Text style={styles.data}>Hafezd</Text>
                            <Text style={styles.data}>Agung</Text>
                            <Text style={styles.data}>Surya</Text>
                        </ScrollView>
                    </Tab>
                    <Tab heading = "Complete" tabStyle={{backgroundColor: 'rgb(46,56,58)'}} activeTextStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'rgb(14,18,21)'}} textStyle={{color: '#fff'}} >
                        <ScrollView  style={styles.form}>
                            <Text style={styles.data}>Text</Text>
                            <Text style={styles.data}>Text</Text>
                            <Text style={styles.data}>Text</Text>
                        </ScrollView>
                    </Tab>
                    <Tab heading = "Missed" tabStyle={{backgroundColor: 'rgb(46,56,58)'}} activeTextStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'rgb(14,18,21)'}} textStyle={{color: '#fff'}} >
                        <ScrollView  style={styles.form}>
                            <Text style={styles.data}>Text</Text>
                            <Text style={styles.data}>Text</Text>
                            <Text style={styles.data}>Text</Text>
                        </ScrollView>
                    </Tab>
                </Tabs>
                <View style={{backgroundColor: 'rgb(46,56,58)'}} >
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
        borderRadius: 10
    },

    button: {
        width: 60,
        height: 60,
        backgroundColor: 'rgb(14,18,21)',
        borderRadius: 50,
        marginLeft: 330,
        marginBottom: 20,
        marginTop: 10

    },

    buttonText: {
        color: '#fff',
        paddingVertical: 3,
        paddingHorizontal: 20,
        fontSize: 38,
        fontWeight: '300'
    }
});