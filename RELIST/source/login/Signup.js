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

import Formsignup from './Formsignup';
import { Actions } from 'react-native-router-flux';
import { Container } from 'native-base';

export default class Signup extends Component{
    static navigationOptions ={
    header: null,
    gesturesEnabled: false
}
    login(){
        Actions.pop()
    }

    render(){
        return(
            <Container style={styles.marg}> 
            <StatusBar 
                backgroundColor= "rgb(48,56,58)"
                barStyle= "light-content"
                />
                <View style={styles.logocon}>
                    <Text style={styles.texts}>
                        Sign Up
                    </Text>
                </View>
                <View style={styles.form}>
                    <Formsignup type="Sign Up" />
                    <View style={styles.signInTextCont}>
                        <Text style={styles.signInText}>Already have an account?</Text>
                        <TouchableOpacity onPress={this.login}><Text style={styles.signInButton}> Sign In</Text></TouchableOpacity>
                    </View>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    marg: {
        flex: 1,
        backgroundColor: 'rgb(48,56,58)'
    },
    texts: {
        color: 'rgb(160,253,193)',
        marginTop: 200,
        paddingBottom: 25,
        fontSize: 40,
        textAlign: 'center',
    },
    signInTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    signInText: {
       color: 'rgba(255,255,255,0.6)',
       fontSize: 16
    },
    signInButton: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '500'
    }
});