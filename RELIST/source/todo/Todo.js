import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import {
    View,
    StyleSheet,
    Text,
    Button
} from 'react-native';
export default class Todo extends Component{
    static navigationOptions ={
        header: null
    }
    render(){ 
        return(
        <View style={styles.wrap}>
           <Text  style={styles.splash}> 
           RHS Project 
           </Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    splash: {
        color: '#fff',
        fontSize: 30,
    },
    wrap:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
  });
  