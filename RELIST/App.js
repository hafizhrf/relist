import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  polyfills
} from 'react-native';
import {Provider} from 'mobx-react/native';
import Mainstore from './source/store/Mainstore';
import Navigation from './source/Navigation';
let appstate = new Mainstore();

export default class App extends Component{
  render(){
    return(
      <Provider appstate={appstate}>
        <Navigation/>
      </Provider>
    )
  }
}