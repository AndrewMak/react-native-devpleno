import React, {Component} from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import {Text} from 'react-native'

const TripScreen = props => {
  return (
    <Text style={{paddingTop: 200}}>Trip</Text>
  )
}


const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Trips: TripScreen
}, {initialRouteName: 'Home'})

export default createAppContainer(AppNavigator)


