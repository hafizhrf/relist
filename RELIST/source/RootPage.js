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
import { Container, Content, Header, Body, Icon, List, Button, Footer, FooterTab, H3,  Card, CardItem, Right, Label } from 'native-base';
import { StackNavigator, NavigationAction, TabNavigator,DrawerNavigator, DrawerItems } from 'react-navigation';
import {observer, inject} from 'mobx-react/native';
import pick from './store/Picker';
import Modal from 'react-native-modal'


@inject('appstate')
@observer

export default class RootPage extends Component{
	constructor(props){
        super(props);
        this.props = props;
        this.state = {
			refreshing: false,
			avatarSource: null,
			hidePassword: true,
			isModalVisible: false,
			user: '',
			passWord: ''
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
	profile(){
		Actions.reset('profile')
	}
	about(){
		Actions.reset('about')
	}

	managePasswordVisibility = () =>
    {
        this.setState({ hidePassword: !this.state.hidePassword });
    }

    _showModal = () => this.setState({ isModalVisible: true})
    _hideModal = () => this.setState({ isModalVisible: false})

	render(){
		let img = this.state.avatarSource == null? null:
		<Image style={styles.drawerImage} source={this.state.avatarSource} />
		return(
			<Container>
				<Content style={{backgroundColor:'#ffffff'}}>
					<List>	
						<Header androidStatusBarColor="rgb(46,56,58)" style={{ height: 200, backgroundColor: 'rgb(46,56,58)'}}>
							<Body style={{alignItems: 'center', justifyContent: 'center',}}>
								<TouchableOpacity onPress={this.show.bind(this)}><Image style={styles.drawerImage} source={require('./image/icon.png')} /></TouchableOpacity>{img}
								<Text style={{color: 'white'}}>Name : {this.user.userDatas.username}</Text>
							</Body>
						</Header>
						<Button active transparent dark style={styles.itemExit} onPress={() => this.index()} >
							<Icon active name="md-home" />
								<Text style={{color: 'black'}}>Home</Text>
						</Button>


						<Button active transparent dark style={styles.itemExit} onPress={() => onPress=this._showModal()} >
						<Icon active name="md-contact" />
							<Text style={{color: 'black'}}>Profile</Text>
						</Button>
					<Modal isVisible={this.state.isModalVisible}>
						<View style={{height: 320, alignItems:'center', justifyContent: 'center', backgroundColor:'rgb(0, 131, 136)'}}>
							<Image style={{ height:80, width:80 }} source={require('./image/icon.png')} />
							<Text style={{ color:'white',fontSize:16, marginBottom: 10}}>My Profile</Text>
							<Content>
								<Card style={{ height:70, width:320, alignSelf: 'center' }}><Text style={{ marginLeft: 20, marginTop:8}}>Username</Text>
								<CardItem style={{ borderRadius: 20, borderColor: 'red'}}>
							<TextInput
								style={{ flex: 1, marginLeft: 20, color: 'black', bottom:13}}
								underlineColorAndroid='transparent'
								returnKeyType="next"
								autoCapitalize="none"
								value={this.user.userDatas.username}
								editable={false}
								onSubmitEditing={() => this.username.focus()}								
								onChangeText={(teks) => this.setState({user: teks})}
							/>
							</CardItem>
							</Card>
							<Card style={{ height:70, width:320, alignSelf: 'center' }}><Text style={{ marginLeft: 20 , marginTop:8}}>Password</Text>
							<CardItem>
								<View style={styles.view}>
							<TextInput
								style={{color: 'black', bottom:13, marginRight: 20, width:320, marginLeft: 20,
								marginRight: 20}}
								underlineColorAndroid='transparent'
								returnKeyType="go"
								secureTextEntry = {this.state.hidePassword}
								autoCapitalize="none"
								value={this.user.userDatas.pass}
								editable={false}
								onChangeText={(password) => this.setState({passWord: password})}
								ref={(input) => this.username =input} 
							/>       
							<TouchableOpacity activeOpacity = { 0.8 } style = {{ 	position: 'absolute', height: 30, width: 35, left: 260 }} onPress = { this.managePasswordVisibility }>
									<Image source = {( this.state.hidePassword) ? require('./image/invisible.png') : require('./image/eye.png')} style = {{ resizeMode: 'contain', height: '100%', width: '100%',bottom: 4, marginBottom: 30 }} />                    
									</TouchableOpacity>
							</View>
							</CardItem>
							</Card>
							</Content>
							<Button
											style={{ justifyContent:'center',alignSelf:'center', width:80, backgroundColor:"rgb(46,56,58)",  marginTop : 5 }}
											onPress={this._hideModal}>
								<Text style={{ color:'white', fontSize:14}}>Cancel</Text>
							</Button>
						<View style={{ marginBottom: 5}} />
						</View>
					</Modal>








						
						<Button active transparent dark style={styles.itemExit} onPress={() => this.about()} >
							<Icon active name="ios-information-circle" />
								<Text style={{color: 'black'}}>About</Text>
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
	show(){
		pick(source => this.setState({avatarSource: source}));
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
	
	view: {
		width: 330
	}
})
