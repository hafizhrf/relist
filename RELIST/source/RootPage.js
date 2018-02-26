import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  polyfills,
  Image,
  BackHandler
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Index from './login/Index';
import Active from './interface/Active';
import Apidemo from '../utilities/api/Apidemo';
import { Container, Content, Header, Body, Icon, List, Button, Footer, FooterTab } from 'native-base';
import { StackNavigator, NavigationAction, TabNavigator,DrawerNavigator, DrawerItems } from 'react-navigation';

export default class RootPage extends Component{
	static navigationOptions = {
		header: null,
    	gesturesEnabled: false
	}

	login(){
        Actions.reset('login')
    }

    exit_function = () => {
    	BackHandler.exitApp();
	}

	render(){
		return(
			<Container>
				<Content style={{backgroundColor:'#ffffff'}}>
					<List>	
						<Header androidStatusBarColor="rgb(46,56,58)" style={{ height: 200, backgroundColor: 'rgb(46,56,58)'}}>
							<Body style={{alignItems: 'center', justifyContent: 'center',}}>
								<Image style={styles.drawerImage} source={require('./image/icon.png')} />
							</Body>
						</Header>
						<Button active transparent dark style={styles.itemExit} onPress={() => this.index()} >
							<Icon active name="md-home" />
								<Text style={{color: 'black'}}>Home</Text>
						</Button>
						<Button active transparent dark style={styles.itemExit} onPress={() => this.exit_function()} >
							<Icon active name="md-person" />
								<Text style={{color: 'black'}}>Profile</Text>
						</Button>   
					</List>
				</Content>
				<Footer>
					<FooterTab>
						<Button full active transparent light onPress={() => this.login()} style={{backgroundColor: 'rgb(46,56,58)'}}>
							<Icon name="md-log-out" />
								<Text style={{color: 'white'}}>Logout</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}


styles = StyleSheet.create({
	drawerImage: {
		height:130,
		width:130
	},
    itemExit: {
    	left:0,
		bottom:0,
    },
})