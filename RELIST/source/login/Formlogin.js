import React, {Component} from 'react';
import {
    Alert,
    View,
    StyleSheet,
    Text,
    TextInput,
    Keyboard,
    Button,
    KeyboardAvoidingView,
    TouchableNativeFeedback,
    TouchableOpacity,
    AsyncStorage,
    Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {link} from '../config';
import { Icon } from 'native-base';
import { inject, observer } from 'mobx-react/native';

@inject('appstate')
@observer
export default class Formlogin extends Component{
    static navigationOptions ={
        header: null
    }

    constructor(props){
        super(props);
        this.props = props;
            this.state = {
                userName: '',
                passWord: '',
                hidePassword: true
        }
        this.user = props.appstate.user;
    }
    masuk = () => {
        this.user.login(this.state.userName,this.state.passWord)
    }

    _loadInitialState = async () => {
        var value = await AsyncStorage.getItem('data');
        if (value !== null){ 
            Actions.reset('index')
        }
    }
    // var data = {
    //     "username": this.state.username,
    //     "password": this.state.password
    // }

    // fetch("http://192.168.100.13:212/user",{
    //     method: "POST",
    //     headers: headers,
    //     body: JSON.stringify(data)
    // })
    // .then(function(response){
    //     return response.json();
    // })
    // .then(function(data){
    //     console.log(data)
    // });

    // }

    index(){
        Actions.reset('index')
    }

    managePasswordVisibility = () =>
    {
        this.setState({ hidePassword: !this.state.hidePassword });
    }

    render(){
        return(
            <View style={styles.container}>
                <KeyboardAvoidingView behavior="padding">
                <TextInput
                    placeholder='Username'
                    placeholderTextColor='#000'
                    underlineColorAndroid='transparent'
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(teks) => this.setState({userName: teks})} 
                    onSubmitEditing={() => this.passInput.focus()}
                    style={styles.input}
                />
                <View style={{ width:310 }}>
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor='#000'
                        underlineColorAndroid='transparent'
                        returnKeyType="go"
                        secureTextEntry = {this.state.hidePassword}
                        autoCapitalize="none"
                        style={styles.inputpass}
                        onSubmitEditing={this.masuk}
                        onChangeText={(text) => this.setState({passWord: text})}
                        ref={(input) => this.passInput =input}
                        onSubmitEditing={this.login}
                    />
                     <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
                            <Image source = {( this.state.hidePassword) ? require('../image/invisible.png') : require('../image/eye.png')} style = { styles.btnImage } />                    
                            </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
                <TouchableOpacity style={styles.button} onPress={this.masuk}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
            
        );
    }

    
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    input: {
        width: 300,
        color: '#000',
        backgroundColor: 'rgb(168,243,187)',
        borderRadius: 25,
        paddingHorizontal: 16,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 80
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
    button:{
        width: 300,
        backgroundColor: 'rgb(14,18,21)',
        borderRadius: 10,
        marginVertical: 10,
        paddingVertical: 13,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
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
       width: '100%',
       marginTop: 11,
       marginLeft:5
   },
});