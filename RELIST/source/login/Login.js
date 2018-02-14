import React, {Component} from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    Image,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import Formlogin from './Formlogin';
import { Actions } from 'react-native-router-flux';
import { Container, Content } from 'native-base';

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
            <Container> 
                <StatusBar 
                    backgroundColor= "rgb(48,56,58)"
                    barStyle= "light-content"
                    />
                    <Content style={styles.marg}>
                        <ScrollView>
                            <View>
                                <Text style={styles.icon}>
                                    <Image source={require('../image/icon.png')} style={{width: 400, height: 400 }} />
                                </Text>
                                <Formlogin type="Login" />
                                <View style={styles.signUpTextCont}>
                                    <Text style={styles.signUpText}>Doesn't have an account? </Text>
                                    <TouchableOpacity onPress={this.signup}><Text style={styles.signUpButton}> Sign Up</Text></TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    marg: {
        backgroundColor: 'rgb(48,56,58)',
    },
    icon: {
        marginTop: 80,
        textAlign: 'center',
    },
    signUpTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row',
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