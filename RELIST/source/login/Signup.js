import React, {Component} from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    Image,
    StatusBar,
    TouchableOpacity,
} from 'react-native';

import Formsignup from './Formsignup';
import { Actions } from 'react-native-router-flux';
import { Container, Content } from 'native-base';

export default class Signup extends Component{

    static navigationOptions = {
    header: null,
    gesturesEnabled: false
}
    login(){
        Actions.pop()
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
                                <Formsignup type="Sign Up" />
                                <View style={styles.signInTextCont}>
                                    <Text style={styles.signInText}>Already have an account? </Text>
                                    <TouchableOpacity onPress={this.login}><Text style={styles.signInButton}> Login</Text></TouchableOpacity>
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
        backgroundColor: 'rgb(48,56,58)'
    },
    icon: {
        marginTop: 80,
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