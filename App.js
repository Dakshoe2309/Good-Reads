import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// You can import from local files
import HomeScreen from "./screens/HomeScreen";
import BookScreen from "./screens/BookScreen";
import HPcos from "./screens/HPcos";
import HG from "./screens/HG";
import FS from "./screens/FS";
import Div from "./screens/Div";
import DVC from "./screens/DVC";
import HPdh from "./screens/Hpdh";
import MB from "./screens/MB";
import SP from "./screens/SP";
import GC from "./screens/GC";

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Appcontainer />


      </View>
    );
  }
}

var switchContainer = createSwitchNavigator({
  HomeScreen: HomeScreen,
  BookScreen: BookScreen,
  HPcos : HPcos,
  HG : HG,
  FS : FS,
  Div : Div,
  DVC : DVC,
  HPdh : HPdh,
  MB : MB,
  GC : GC,
  SP : SP,
});
const Appcontainer = createAppContainer(switchContainer);
