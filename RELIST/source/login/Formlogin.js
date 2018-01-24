import React, {Component} from 'react';
import {
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
export default class Formlogin extends Component{
    static navigationOptions ={
        header: null
    }

    render(){
        return(
            <View style={styles.container}>
                <KeyboardAvoidingView behavior="padding">
                <TextInput
                    placeholder='Username'
                    placeholderTextColor='#fff'
                    underlineColorAndroid='transparent'
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onSubmitEditing={() => this.passInput.focus()}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Password'
                    placeholderTextColor='#fff'
                    underlineColorAndroid='transparent'
                    returnKeyType="go"
                    secureTextEntry
                    autoCapitalize="none"
                    style={styles.inputpass}
                    ref={(input) => this.passInput =input}
                />
                </KeyboardAvoidingView>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    input: {
        width: 300,
        color: '#FFF',
        backgroundColor: '#2196f3',
        borderRadius: 25,
        paddingHorizontal: 16,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 50
    },
    inputpass: {
        width: 300,
        color: '#fff',
        backgroundColor: '#2196f3',
        borderRadius: 25,
        paddingHorizontal: 16,
        marginVertical: 10,
        marginLeft: 20,
        marginRight: 20
    },
    button:{
        width: 300,
        backgroundColor: '#2196f3',
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