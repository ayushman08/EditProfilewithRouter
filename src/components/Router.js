import React, { Component } from 'react';
// import { View, StyleSheet, Text } from 'react-native';
// import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Detail from './Detail';
import { Router, Scene } from 'react-native-router-flux';

// import DatePick from '../../src/components/RegularPicker';

// const RouterComponent = StackNavigator({
//     Home: { screen: Home },
//     About: { screen: About },
//     // DatePick: { screen: DatePick }
// }, {
//     initialRouteName: 'Home',
//     headerMode: 'screen'
// }
// );
const RouterComponent = () => (
  <Router>
  <Scene key="root">
     <Scene key="home" component={Home}  initial />
     <Scene key="detail" component={Detail}  />
  </Scene>
</Router>

);

export default RouterComponent;