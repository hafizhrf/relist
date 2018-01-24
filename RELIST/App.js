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

import Routes from './source/Routes';

import { StackNavigator, NavigationAction, TabNavigator } from 'react-navigation';

const Navigation = StackNavigator({
  routes:{
    screen:Routes,
  },
  
})

export default Navigation;