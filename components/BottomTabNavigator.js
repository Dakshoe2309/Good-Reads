import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen"
import BookScreen from "../screens/BookScreen"

const Tab = createBottomTabNavigator()
export default class BottomTabNavigator extends Component {
  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="HomeScreen" component={HomeScreen} />
          <Tab.Screen name="BookScreen" component={BookScreen} />

        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}