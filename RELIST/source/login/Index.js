import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Tab, Tabs } from 'native-base';

export default class Index extends Component{
    static NavigationOptions = {
        header: null
    }
    
    render(){
        return(
            <Container>
                <Tabs initialPage={1}>
                    <Tab heading = "Complete">
                        
                    </Tab>
                    <Tab heading = "Active">

                    </Tab>
                    <Tab heading = "Missed">

                    </Tab>
                </Tabs>
                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        backgroundColor: '#2196f3',
        borderRadius: 50,
        marginLeft: 320,
        marginBottom: 20,

    },

    buttonText: {
        color: '#fff',
        paddingVertical: 3,
        paddingHorizontal: 20,
        fontSize: 38,
        fontWeight: '500'
    }
});