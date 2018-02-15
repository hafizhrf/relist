import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, BackHandler, StatusBar } from 'react-native';
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
                <StatusBar 
                    backgroundColor= "rgb(48,56,58)"
                    barStyle= "light-content"
                    />
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
                    <Fab
                        position="bottomRight"
                        style={{backgroundColor: 'rgb(163,243,187)'}}
                        onPress={this.add}
                    ><Icon name="md-add" style={{color: 'black', fontSize: 30}} />
                    </Fab>
            </Container>
        );  
    }
}

