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
import { Container, Content, Header, Body, Icon, List, Footer, FooterTab, Drawer, Left, Item, Input, Card, CardItem, Right, Label, H3, Button } from 'native-base';
import { StackNavigator, NavigationAction, TabNavigator,DrawerNavigator, DrawerItems } from 'react-navigation';
import {observer, inject} from 'mobx-react/native';
import SideBar from '../RootPage';
import Modal from 'react-native-modal'

@inject('appstate')
@observer

export default class RootPage extends Component{
	static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
			refreshing: false,
            avatarSource: null,
            hidePassword: true,
            isModalVisible: false
        }
        this.user = props.appstate.user;
    }

	static navigationOptions = {
		header: null
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

    _showModal = () => this.setState({ isModalVisible: true})
    _hideModal = () => this.setState({ isModalVisible: false})

	render(){
		return(
                    <Drawer ref={(ref) => { this._drawer = ref; }} content={<SideBar navigator={this._navigator} />} onClose={() => this.closeDrawer()} >	
						<Header dark noShadow androidStatusBarColor="rgb(46,56,58)" style={{ height: 200,backgroundColor: 'rgb(46,56,58)'}}>
                        <Body style={{alignItems: 'center', justifyContent: 'center'}}>
								<Image style={styles.drawerImage} source={require('../image/icon.png')} />
							</Body>
                        <Item style={{marginLeft: -100, marginRight: 1.5, backgroundColor:'transparent'}}>
                        <Input editable={false} placeholderTextColor="white" style={{flex: 1, color:'white'}} />
                        {/* <Image source={require('../image/search.png')} style={{ height: 24, width:24}} />
                        <Input placeholder="Search" /> */}
                    </Item>   
                        </Header>
                        {/* <Content>
          <Card style={{ width:340, alignSelf: 'center' }}><Text style={{ marginLeft: 20, marginTop:8}}>username</Text>
            <CardItem style={{ borderRadius: 20, borderColor: 'red'}}>
              <Text style={{ marginLeft: 20}}>{this.user.userDatas.username}</Text>
             </CardItem>
            </Card>
            <Card style={{ height:80, width:340, alignSelf: 'center' }}><Text style={{ marginLeft: 20 , marginTop:8}}>Password</Text>
             <CardItem>
             <TextInput
                 style={{ marginLeft: 20, color: 'black', bottom:13}}
                 underlineColorAndroid='transparent'
                 returnKeyType="go"
                 secureTextEntry = {this.state.hidePassword}
                 autoCapitalize="none"
                 value={this.user.userDatas.pass}
                 editable={false}ting={() => this.list.focus()}
                 onChangeText={(teks) => this.setState({pass: teks})}
             />       
             <Right>
              <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
                     <Image source = {( this.state.hidePassword) ? require('../image/invisible.png') : require('../image/eye.png')} style = { styles.btnImage } />                    
                     </TouchableOpacity>
             </Right>
             </CardItem>
           </Card>
        </Content> */}

                   <TouchableOpacity onPress={this._showModal}>
                <Text>Show Modal</Text>
            </TouchableOpacity>
            <Modal isVisible={this.state.isModalVisible}>
                <View style={{height: 300, alignItems:'center', justifyContent: 'center', backgroundColor:'rgb(0, 131, 136)'}}>
                    <View style={{ marginTop: 10}}/>
                    <H3 style={{ color:'white', marginBottom: 10}}>Hello!</H3>
                    <Content>
          <Card style={{ height:80, width:320, alignSelf: 'center' }}><Text style={{ marginLeft: 20, marginTop:8}}>Username</Text>
            <CardItem style={{ borderRadius: 20, borderColor: 'red'}}>
              <TextInput
                 style={{ marginLeft: 20, color: 'black'}}
                 underlineColorAndroid='transparent'
                 returnKeyType="go"
                 autoCapitalize="none"
                 value={this.user.userDatas.username}
                 editable={false}ting={() => this.list.focus()}
                 onChangeText={(teks) => this.setState({pass: teks})}
             />
             </CardItem>
            </Card>
            <Card style={{ height:80, width:320, alignSelf: 'center' }}><Text style={{ marginLeft: 20 , marginTop:8}}>Password</Text>
             <CardItem>
             <TextInput
                 style={{ marginLeft: 20, color: 'black', bottom:13}}
                 underlineColorAndroid='transparent'
                 returnKeyType="go"
                 secureTextEntry = {this.state.hidePassword}
                 autoCapitalize="none"
                 value={this.user.userDatas.pass}
                 editable={false}ting={() => this.list.focus()}
                 onChangeText={(teks) => this.setState({pass: teks})}
             />       
             <Right>
              <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
                     <Image source = {( this.state.hidePassword) ? require('../image/invisible.png') : require('../image/eye.png')} style = { styles.btnImage } />                    
                     </TouchableOpacity>
             </Right>
             </CardItem>
           </Card>
        </Content>
        <Button
                        style={{ justifyContent:'center',alignSelf:'center', width:80, backgroundColor:"rgb(46,56,58)",  marginTop : 5 }}
                        onPress={this._hideModal}>
            <Text style={{ color:'white', fontSize:16}}>Cancel</Text>
        </Button>
                <View style={{ marginBottom:20}} />
                </View>
            </Modal>
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
       height: 30,
       width: 35,
       bottom: -7,
       left: 220,
    },
   
   btnImage: {
       resizeMode: 'contain',
       height: '80%',
       width: '80%',
   },

   inputpass: {
    width: 300,
    color: 'black',
    backgroundColor: 'rgb(168,243,187)',
    borderRadius: 25,
    paddingHorizontal: 16,
    marginVertical: 10,
    marginLeft: 20,
    marginRight: 20
},
})
