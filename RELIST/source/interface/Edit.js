import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { Container, Content, Icon, Fab } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Edit extends Component{
    
    index(){
        Actions.pop()
    }

    render(){
        return(
            <Container style={{backgroundColor: 'rgb(48,56,58)'}}>
                <View style={styles.UI}>
                    <TextInput 
                        placeholder='Update your Project Todo here...'
                        placeholderTextColor='#999'
                        underlineColorAndroid='rgb(14,18,21)'
                        returnKeyType="next"
                        onSubmitEditing={() => this.list.focus()}
                        style={styles.todo} />
                </View>
                <View style={styles.list}>
                    <TextInput 
                        placeholder='Write your List here...'
                        placeholderTextColor='#999'
                        underlineColorAndroid='rgb(14,18,21)'
                        returnKeyType="go"
                        ref={(todo) => this.list =todo}
                        style={styles.input} />
                        <TouchableOpacity style={styles.button} onPress={this.index}>
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.deleteFab}>
                    <Fab position="bottomRight" style={{backgroundColor: 'white'}}>
                        <Icon name="md-trash" style={{color: 'red'}} />
                    </Fab>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

    deleteFab: {
        flex: 1,
        bottom: 0,
        flexDirection: 'row',
        position: 'absolute'
    },

    UI: {
        flexDirection: 'row',
        position: 'absolute',
        top: 55,
        left: 0
    },

    list: {
        flexDirection: 'row',
        position: 'absolute',
        marginTop: 10,
        top: 110,
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

    button: {
        width: 40,
        height: 40,
        backgroundColor: '#FFF',
        borderRadius: 50,
        marginRight: 20,
        marginBottom: 20,
    },

    buttonText: {
        color: 'black',
        marginTop: 3,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '500'
    }
});