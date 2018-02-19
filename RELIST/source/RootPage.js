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
import { Container, Content, Header, Body, Icon, List, Button } from 'native-base';
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
		<Content style={{backgroundColor:'#ffffff'}}>
			<List>	
				<Header androidStatusBarColor="rgb(46,56,58)" style={{ height: 200, backgroundColor: 'rgb(46,56,58)'}}>
					<Body>
						<Image style={styles.drawerImage} source={require('./image/icon.png')} />
					</Body>
				</Header>
				<Button transparent dark onPress={() => this.login()} >
					<Icon name="md-log-out" style={{marginLeft: 10, fontSize: 30}} />
						<Text style={styles.itemExit}>Logout</Text>
				</Button>
				<Button transparent dark onPress={() => this.exit_function()} >
					<Icon name="md-power" style={{marginLeft: 10, fontSize: 30}} />
						<Text style={styles.itemExit}>Exit</Text>
				</Button>                
			</List>
		</Content>
		);
	}
}


styles = StyleSheet.create({
	drawerImage: {
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 75,
		height:130,
		width:130
	},
    itemExit: {
    	left:0,
		bottom:0,
		color: 'black',
    },
})
