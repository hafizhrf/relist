import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { Container } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Add extends Component{
    
    index(){
        Actions.pop()
    }

    render(){
        return(
            <Container style={styles.container}>
                <View style={styles.UI}>
                    <TextInput 
                        placeholder='What are you want to do?'
                        placeholderTextColor='#000'
                        underlineColorAndroid='transparent'
                        style={styles.input} />
                        <TouchableOpacity style={styles.button} onPress={this.index}>
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(48,56,58)'
    },

    UI: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0
    },

    input: {
        width: 300,
        backgroundColor: 'rgb(168,243,187)',
        paddingHorizontal: 16,
        borderRadius: 25,
        marginLeft: 20,
        marginBottom: 20,
        
    },

    button: {
        width: 60,
        height: 60,
        backgroundColor: 'rgb(14,18,21)',
        borderRadius: 50,
        marginLeft: 10,
        marginRight: 20,
        marginBottom: 20,
    },

    buttonText: {
        color: '#fff',
        paddingVertical: 3,
        paddingHorizontal: 20,
        fontSize: 38,
        fontWeight: '300'
    }
});