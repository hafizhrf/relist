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
import Login from './source/login/Login';
import Apidemo from './utilities/api/Apidemo';
import { StackNavigator, NavigationAction, TabNavigator } from 'react-navigation';

const Navigation = TabNavigator({
  login:{
    screen:Login,
  },
  api:{
    screen:Apidemo,
  }
})

export default Navigation;