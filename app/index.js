import React, { Component } from 'react';
import EStylesheet from 'react-native-extended-stylesheet';
import { StackNavigator } from 'react-navigation';

import Home from './screens/Home';
import Details from './screens/Details';

EStylesheet.build({
  $primaryBlue: '#0F3ED6',
  $primaryGray: '#CAC8C8',
  $primaryGreen: '#22B20F',
  $primaryRed: '#CE0909',
  $primaryYellow: '#EAE705',
});

const RootStack = StackNavigator({
  Home: {
    screen: Home,
  },
  Details: {
    screen: Details,
  },
},
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#F4522E',
      },
      headerTintColor: '#FFFFFF',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
