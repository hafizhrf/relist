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


import { StackNavigator, TabNavigator, NavigationActions } from 'react-navigation';

const Navigation = StackNavigator({
  routes: {
    screen:Routes,
  },
})

export default Navigation;