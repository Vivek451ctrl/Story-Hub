import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import WriteStoryScreen from './screens/WriteStoryScreen.js'
import ReadStoryScreen from './screens/ReadStoryScreen.js'
function ReadStoryScreen() {
  return(
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text> Read your story!</Text>
    </View>
  )
}
function WriteStoryScreen() {
  return(
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text> Write your story!</Text>
    </View>
  )
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Read Story" component={ReadStoryScreen} />
        <Tab.Screen name="Write Story" component={WriteStoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
