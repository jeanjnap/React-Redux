import React from 'react';

import { StackNavigator } from 'react-navigation';

import Screen1 from './Screen1';
import Screen2 from './Screen2';


class HomeScreen extends React.Component {
  render() {
    return (
      <Screen1 navigation={this.props.navigation} />
    );
  }
}

export default StackNavigator({
  Screen1: { screen: HomeScreen, navigationOptions: { title: "Screen 1" }},
  Screen2: { screen: Screen2, navigationOptions: { title: "Screen 2" }},
}, {
  }
);