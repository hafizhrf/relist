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
import { Container, Content, Header, Body, Icon, List, Button, Footer, FooterTab, Drawer, Left, Item, Input } from 'native-base';
import { StackNavigator, NavigationAction, TabNavigator,DrawerNavigator, DrawerItems } from 'react-navigation';
import {observer, inject} from 'mobx-react/native';
import SideBar from '../RootPage';

@inject('appstate')
@observer

export default class RootPage extends Component{
	static navigationOptions = {
        header: null,
        gesturesEnabled: false
    }
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
			refreshing: false,
            avatarSource: null,
            hidePassword: true
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
    closeDrawer() {
        this._drawer._root.close()
    }
    
    openDrawer() {
        this._drawer._root.open()
    }

    managePasswordVisibility = () =>
    {
        this.setState({ hidePassword: !this.state.hidePassword });
    }

	render(){
		return(
                    <Drawer ref={(ref) => { this._drawer = ref; }} content={<SideBar navigator={this._navigator} />} onClose={() => this.closeDrawer()} >	
						<Header androidStatusBarColor="rgb(46,56,58)" style={{ backgroundColor: 'rgb(46,56,58)'}}>
                        <Left>
                            <Button transparent onPress={()=> this.openDrawer()}>
                                <Icon name="md-menu" style={{color: '#fff'}} />
                            </Button>
                        </Left>
                        <Item style={{marginLeft: -100, marginRight: 1.5, backgroundColor:'transparent'}}>
                        <Input editable={false} placeholderTextColor="white" style={{flex: 1, color:'white'}} />
                        {/* <Image source={require('../image/search.png')} style={{ height: 24, width:24}} />
                        <Input placeholder="Search" /> */}
                    </Item>   
                        </Header>
                        <List style={{ height: 150, backgroundColor: 'rgb(46,56,58)'}}>
                            <Body style={{alignItems: 'center', justifyContent: 'center'}}>
								<Image style={styles.drawerImage} source={require('../image/icon.png')} />
								<Text style={{color: 'white'}}>Name : {this.user.userDatas.username}</Text>
							</Body>
                        </List>
						<Button active transparent dark style={styles.itemExit} onPress={() => this.index()} >
							<Icon active name="md-home" />
								<Text style={{color: 'black'}}>Home</Text>
						</Button>
                    <View style={ styles.textBoxBtnHolder}>
                        <TextInput secureTextEntry = {this.state.hidePassword} style= { styles.textBox }
                        />
                        <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
                            <Image source = {( this.state.hidePassword) ? require('../image/invisible.png') : require('../image/eye.png')} style = { styles.btnImage } />                    
                            </TouchableOpacity>
                    </View>
                    <View style={styles.inputpass}>
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor='#000'
                        underlineColorAndroid='transparent'
                        returnKeyType="go"
                        secureTextEntry = {this.state.hidePassword}
                        autoCapitalize="none"
                        onSubmitEditing={this.masuk}
                        onChangeText={(text) => this.setState({passWord: text})}
                        ref={(input) => this.passInput =input}
                        onSubmitEditing={this.login}
                    />
                     <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
                            <Image source = {( this.state.hidePassword) ? require('../image/invisible.png') : require('../image/eye.png')} style = { styles.btnImage } />                    
                            </TouchableOpacity>
                    </View>
                    </Drawer>
					
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
     textBoxBtnHolder: {
        position: 'relative',
        alignSelf: 'stretch',
        justifyContent: 'center'
    }, 
   textBox: {
       fontSize: 18,
       alignSelf: 'stretch',
       height: 45,
       paddingRight: 45,
       borderWidth: 1,
       paddingVertical: 0,
       borderColor: 5,
       color: 'red'
   },
   visibilityBtn: {
       position: 'absolute',
       right: 3,
       height: 40,
       width: 35,
       padding: 5
   },
   
   btnImage: {
       resizeMode: 'contain',
       height: '100%',
       width: '100%'
   },

   inputpass: {
    width: 300,
    color: '#000',
    backgroundColor: 'rgb(168,243,187)',
    borderRadius: 25,
    paddingHorizontal: 16,
    marginVertical: 10,
    marginLeft: 20,
    marginRight: 20
},
})
