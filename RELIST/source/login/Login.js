import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    ImageBackground,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import Formlogin from './Formlogin';
import { Actions } from 'react-native-router-flux';


export default class Login extends Component{

    static navigationOptions = {
    header: null,
    gesturesEnabled: false
}
    signup(){
        Actions.signup()
    }

    render(){
        return(
            <ImageBackground source={require('../image/bg.jpg')} style={styles.container}>
                <View style={styles.marg}> 
                <StatusBar 
                    backgroundColor= "#b6e0ec"
                    barStyle= "light-content"
                    />
                   <View style={styles.logocon}>
                        <Text style={styles.texts}>
                            Login
                        </Text>
                    </View>
                    <View style={styles.form}>
                        <Formlogin type="Login" />
                        <View style={styles.signUpTextCont}>
                            <Text style={styles.signUpText}>Doesn't have an account?</Text>
                            <TouchableOpacity onPress={this.signup}><Text style={styles.signUpButton}> Sign Up</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    marg: {
        marginBottom: 100
    },
    texts: {
        color: '#757575',
        marginTop: 200,
        paddingBottom: 25,
        fontSize: 40,
        textAlign: 'center',
    },
    signUpTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    signUpText: {
       color: 'rgba(255,255,255,0.6)',
       fontSize: 16
    },
    signUpButton: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '500'
    }
});