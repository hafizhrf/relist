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
    TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'native-base';


export default class Formlogin extends Component{
    static navigationOptions ={
        header: null
    }

    constructor(props){
        super(props);
        this.props = props;
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
                    onChangeText={(username) => this.setState(username)}
                    onSubmitEditing={() => this.passInput.focus()}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Password'
                    placeholderTextColor='#000'
                    underlineColorAndroid='transparent'
                    returnKeyType="go"
                    secureTextEntry
                    autoCapitalize="none"
                    style={styles.inputpass}
                    ref={(input) => this.passInput =input}
                />
                </KeyboardAvoidingView>
                <TouchableOpacity style={styles.button} onPress={this.index}>
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
    }
});