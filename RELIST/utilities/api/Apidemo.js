import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    KeyboardAvoidingView,
    ImageBackground
} from 'react-native';
import api from './api';

export default class Apidemo extends Component{
    static navigationOptions ={
    header: null,
    gesturesEnabled: false
    } 
    
    constructor(props){
        super(props);
        this.state = {
            username: [],
            password: []
        }
    }

    componentWillMount(){
        api.getUsers().then((res) =>{
            this.setState({
                username : res.username,
                password: res.password
            })
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.marg}> 
                   <View style={styles.logocon}>
                        <Text style={styles.texts}>
                            Test{this.state.username}, {this.state.password}
                        </Text>
                    </View>
                </View>
            </View>
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
        color: 'black',
        marginTop: 20,
        paddingBottom: 25,
        fontSize: 40,
        textAlign: 'center',
    },
});