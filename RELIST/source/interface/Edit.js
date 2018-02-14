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

                <Fab position="bottomRight" style={{backgroundColor: 'white'}}>
                    <Icon name="md-trash" style={{color: 'red'}} />
                </Fab>

            </Container>
        );
    }
}

const styles = StyleSheet.create({

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
});