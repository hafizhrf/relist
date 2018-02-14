import React, { Component } from 'react';
import {Alert, View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Container, Fab, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Add extends Component{
    
    onPressButton(){
        Alert.alert('Adding Item', 'You add 1 Item', [
            {text: 'Cancel', onPress: () => console.log('Canceling..'), style: 'cancel'},
            {text: 'Oke', onPress:() => console.log('Adding Your Item...')}
        ])
    }


    render(){
        return(
            <Container style={styles.container}>
                <View style={styles.UI}>
                    <TextInput 
                        placeholder='Create your Project Todo here...'
                        placeholderTextColor='#999'
                        underlineColorAndroid='white'
                        returnKeyType="next"
                        onSubmitEditing={() => this.list.focus()}
                        style={styles.todo} />
                </View>
                <View style={styles.list}>
                    <TextInput 
                        placeholder='Write your List here...'
                        placeholderTextColor='#999'
                        underlineColorAndroid='white'
                        returnKeyType="go"
                        ref={(todo) => this.list =todo}
                        style={styles.input} />
                        <TouchableOpacity onPress={this.onPressButton}>
                            <Icon name="ios-add-circle-outline" style={{color: 'white', fontSize: 46, marginLeft: 10, marginRight: 20}} />
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
        top: 55,
        left: 0
    },

    list: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        marginTop: 10,
        top: 110,
        left: 0
    },

    line: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 185,
        left: 0 
    },

    todo: {
        flex: 1,
        color: '#fff',
        paddingHorizontal: 16,
        borderRadius: 25,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
    },

    input: {
        flex: 1,
        color: '#fff',
        paddingHorizontal: 16,
        borderRadius: 25,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,  
    },

    lines: {
        flex: 1,
        color: '#fff',
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 20,
        alignItems: 'stretch'
    },

    button: {
        width: 40,
        height: 40,
        marginRight: 20,
        marginBottom: 20,
    },
});