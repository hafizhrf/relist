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
import {observer, inject} from 'mobx-react/native';


@inject('appstate')
@observer
export default class RootPage extends Component{
	constructor(props){
        super(props);
        this.props = props;
        this.state = {
            refreshing: false
        }
        this.user = props.appstate.user;
    }

	static navigationOptions = {
		header: null,
    	gesturesEnabled: false
	}

	index(){
        Actions.reset('index')
    }
    login(){
        Actions.reset('login')
    }

	render(){
		return(
			<Container>
				<Content style={{backgroundColor:'#ffffff'}}>
					<List>	
						<Header androidStatusBarColor="rgb(46,56,58)" style={{ height: 200, backgroundColor: 'rgb(46,56,58)'}}>
							<Body style={{alignItems: 'center', justifyContent: 'center',}}>
								<Image style={styles.drawerImage} source={require('./image/icon.png')} />
								<Text style={{color: 'white'}}>Name : {this.user.userDatas.username}</Text>
							</Body>
						</Header>
						<Button active transparent dark style={styles.itemExit} onPress={() => this.index()} >
							<Icon active name="md-home" />
								<Text style={{color: 'black'}}>Home</Text>
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
