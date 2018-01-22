import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    KeyboardAvoidingView,
    ImageBackground
} from 'react-native';
import Formlogin from './Formlogin';

export default class Login extends Component{
    static navigationOptions ={
    header: null,
    gesturesEnabled: false
}

    render(){
        return(
            <ImageBackground source={require('../image/bg.jpg')} style={styles.container}>
                <View style={styles.marg}> 
                   <View style={styles.logocon}>
                        <Text style={styles.texts}>
                            Register
                        </Text>
                    </View>
                    <View style={styles.form}>
                        <Formlogin />
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
        color: '#FFF',
        marginTop: 20,
        paddingBottom: 25,
        fontSize: 40,
        textAlign: 'center',
    },
});