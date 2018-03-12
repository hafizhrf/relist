import React, {Component} from 'react';
import {
    View,
    Alert,
    StyleSheet,
    Text,
    TextInput,
    Keyboard,
    Button,
    KeyboardAvoidingView,
    TouchableNativeFeedback,
    TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import Lib from '../Lib';
import {observer, inject} from 'mobx-react/native';


@inject('appstate')
@observer
export default class Formsignup extends Component{
    constructor(props){
        super(props)
            this.state = {
                userName: '',
                passWord: '',
                confirm: ''
        }
        this.user = props.appstate.user;
    }

    static navigationOptions ={
        header: null
    }

    Regis=()=>{
        if(this.state.passWord === this.state.confirm){
            this.user.regis(this.state.userName, this.state.passWord)
        }
        else{
            Alert.alert('Error','Please retype your password');
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <KeyboardAvoidingView behavior="padding">
                <TextInput 
                    placeholder='Username'
                    placeholderTextColor='#999'
                    underlineColorAndroid='white'
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onSubmitEditing={() => this.passInput.focus()}
                    onChangeText={(username) => this.setState({userName: username})}                    
                    style={styles.todo} />
                <TextInput 
                    placeholder='Password'
                    placeholderTextColor='#999'
                    underlineColorAndroid='white'
                    returnKeyType="next"
                    secureTextEntry
                    autoCapitalize="none"
                    onSubmitEditing={() => this.confirmPass.focus()}
                    onChangeText={(password) => this.setState({passWord: password})}
                    ref={(input) => this.passInput =input} 
                    style={styles.todo} />
                <TextInput 
                    placeholder='Confirm Password'
                    placeholderTextColor='#999'
                    underlineColorAndroid='white'
                   	secureTextEntry
                    returnKeyType="go"
                    autoCapitalize="none"
                    onChangeText={(teks) => this.setState({confirm: teks})}
                    ref={(password) => this.confirmPass =password}  
                    style={styles.todo} />
                </KeyboardAvoidingView>
                <TouchableOpacity style={styles.button} onPress={this.Regis} >
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',
    },
    todo: {
        width: 300,
        color: 'white',
        paddingHorizontal: 16,
        marginLeft: 20,
        marginRight: 20,
    },
    input: {
        width: 300,
        color: '#000',
        backgroundColor: 'rgb(165,253,193)',
        borderRadius: 25,
        paddingHorizontal: 16,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 80
    },
    inputpass: {
        width: 300,
        color: '#000',
        backgroundColor: 'rgb(165,253,193)',
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
    }
});