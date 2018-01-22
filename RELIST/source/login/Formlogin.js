import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Keyboard,
    Button,
    TouchableNativeFeedback 
} from 'react-native';
export default class Formlogin extends Component{
    static navigationOptions ={
        header: null
    }
    


    constructor(){
        super()
        this.state={
            showMe:true
        }
       
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput
                    placeholder='Username'
                    underlineColorAndroid='transparent'
                    returnKeyType="next"
                    onSubmitEditing={() => this.passInput.focus()}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Password'
                    underlineColorAndroid='transparent'
                    returnKeyType="go"
                    secureTextEntry
                    style={styles.inputpass}
                    ref={(input) => this.passInput =input}
                />
                <View style={styles.submit}>
                    <Button
                        title="REGISTER"
                        color="#47baef"
                    />
                </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderBottomWidth: 0,
        marginLeft: 16,
        marginBottom: 5,
        marginRight:16,
        marginTop: 150
    },
    inputpass: {
        backgroundColor: 'white',
        marginLeft: 16,
        marginRight: 16,
        paddingHorizontal: 10,
        borderBottomWidth: 0,
    },
    submit:{
        paddingTop: 200,
        marginLeft: 250,
        marginRight: 20,

    }
});