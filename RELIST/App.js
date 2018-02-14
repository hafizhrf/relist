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
import RoutesIndex from './source/RoutesIndex';

import { StackNavigator, TabNavigator, NavigationActions } from 'react-navigation';

const Navigation = StackNavigator({
  routes: { screen:Routes},
  routesIndex: {screen: RoutesIndex}
})

export default Navigation;