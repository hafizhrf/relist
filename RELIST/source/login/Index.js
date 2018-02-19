import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, BackHandler, StatusBar } from 'react-native';
import { Container, Tab, Tabs, Content, Card, CardItem, Body, Button, Icon, Fab, Drawer, Item, Header, Left, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';
import SideBar from '../RootPage';
const util = require('util');

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

    closeDrawer() {
        this._drawer._root.close()
    }
    
    openDrawer() {
        this._drawer._root.open()
    }
    
    render(){
        return(
            <Drawer ref={(ref) => { this._drawer = ref; }} content={<SideBar navigator={this._navigator} />} onClose={() => this.closeDrawer()} >
                <Header searchBar rounded dark noShadow androidStatusBarColor="rgb(46,56,58)" style={{backgroundColor: 'rgb(46,56,58)'}}>
                    <Left>
                        <Button transparent onPress={()=> this.openDrawer()}>
                            <Icon name="md-menu" style={{color: '#fff', width: 24, height: 24}} />
                        </Button>
                    </Left>
                    <Item style={{marginLeft: -100, marginRight: 1.5,}}>
                        <Icon name="md-search" style={{fontSize: 24}} />
                        <Input placeholder="Search" />
                        {/* <Image source={require('../image/search.png')} style={{ height: 24, width:24}} />
                        <Input placeholder="Search" /> */}
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>       
                </Header>
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
            </Drawer>
        );  
    }
}

