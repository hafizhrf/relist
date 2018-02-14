import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, BackHandler } from 'react-native';
import { Container, Tab, Tabs, Content, Card, CardItem, Body, Button, Icon, Fab } from 'native-base';
import { Actions } from 'react-native-router-flux';

import Active from '../interface/Active';
import Complete from '../interface/Complete';
import Missed from '../interface/Missed';

export default class Index extends Component{
    static navigationOptions = {
        header: null,
        gesturesEnabled: false
    }

    // constructor (props) {
    //     super(props)
    //   }
    
    //   componentDidMount () {
    //     BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid()) // Listen for the hardware back button on Android to be pressed
    //   }
    
    //   componentWillUnmount () {
    //     BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid()) // Remove listener
    //   }
    
    //   backAndroid () {

    //     if (Actions.state.index === 0) {
    //         return false;
    //     }

    //     Actions.pop() // Return to previous screen
    //     return true // Needed so BackHandler knows that you are overriding the default action and that it should not close the app
    //   }
    

    add(){
        Actions.add()
    }
    
    render(){
        return(
            <Container style={{backgroundColor: 'rgb(48,56,58)'}}>
                <Tabs initialPage={0} >
                    <Tab heading = "Active" tabStyle={{backgroundColor: 'rgb(46,56,58)'}} activeTextStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'rgb(46,56,58)'}} textStyle={{color: '#fff'}} >
                        <Active />
                    </Tab>
                    <Tab heading = "Complete" tabStyle={{backgroundColor: 'rgb(46,56,58)'}} activeTextStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'rgb(46,56,58)'}} textStyle={{color: '#fff'}} >
                        <Complete />
                    </Tab>
                    <Tab heading = "Missed" tabStyle={{backgroundColor: 'rgb(46,56,58)'}} activeTextStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'rgb(46,56,58)'}} textStyle={{color: '#fff'}} >
                        <Missed />
                    </Tab>
                </Tabs>
                <View>
                    <Fab
                        position="bottomRight"
                        style={{backgroundColor: '#999'}}
                        onPress={this.add}
                    ><Icon name="md-plus-circle" />
                    </Fab>
                </View>
            </Container>
        );  
    }
}

const styles = StyleSheet.create({

    menu: {
        width: 55,
        height: 55,
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 15,
        alignSelf: 'flex-end',
        position: 'relative',
        bottom: 0,
    },

    button: {
        width: 50,
        height: 50,
        marginTop: 10,
        marginBottom: 20,
        marginRight: 15,
        alignSelf: 'flex-end',
        position: 'relative',
        bottom: 0,
    },
});

