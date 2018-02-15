import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Container, Content, Icon, Fab, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Edit extends Component{
    
    index(){
        Actions.pop()
    }

    constructor() {
        super();
        this.state = {
            active: 'true'
        };
    }

    onPressButton(){
        Alert.alert('Adding Item', 'You add 1 Item')
    }

    onPressDelete(){
        Alert.alert('Delete Item', 'Deleted 1 Item')
    }

    onPressSave(){
        Alert.alert('Save Item', 'You saving this item')
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
                        <TouchableOpacity onPress={this.onPressButton} style={{backgroundColor: 'white', borderRadius: 25, alignItems: 'center' , justifyContent: 'center' , width: 50, height: 50, marginLeft: 10, marginRight: 10}} onPress={this.onPressButton}>
                            <Icon name="ios-send-outline" style={{color: 'rgb(14,18,21)', fontSize: 28}} />
                        </TouchableOpacity>
                </View>

                <Fab 
                active={this.state.active}
                direction="up"
                containerStyle={{ }}
                position="bottomRight"
                style={{backgroundColor: 'white'}}
                onPress={() => this.setState({ active: !this.state.active })}>
                <Icon name="md-more" style={{color: 'black'}} />
                    <Button style={{ backgroundColor: 'red' }} onPress={this.onPressDelete} >
                        <Icon name="md-trash"/>
                    </Button>
                    <Button style={{ backgroundColor: '#2196f3' }} onPress={this.onPressSave} >
                        <Icon name="md-document"/>
                    </Button>
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