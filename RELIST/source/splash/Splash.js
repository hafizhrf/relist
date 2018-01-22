import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
export default class Splash extends Component{
    static navigationOptions ={
        header: null
    }

    componentWillMount()
    {
        setTimeout(()=>{
            this.props.navigation.navigate('login');
        },1000)
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
        backgroundColor: '#07090C',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
  });
  