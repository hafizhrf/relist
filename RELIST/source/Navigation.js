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
import Routes from './Routes';
import RoutesIndex from './RoutesIndex';
import RootPage from './RootPage';

import { StackNavigator, TabNavigator, NavigationActions } from 'react-navigation';

const Navigation = StackNavigator({
  routes: { screen:Routes},
  routesIndex: {screen: RoutesIndex},
  drawer: {screen: RootPage}
})

export default Navigation;