import React from "react";
import {StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CarLock from "./components/CarLock";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeScreen({}) {

  return (
    <>
      <View style={styles.container}>
        
        <View style={[styles.card, styles.shadowProp]}>
       
          <Button 
            title="Climate Control"
            onPress={() => navigation.navigate('Climate')}
          />
        </View>
        
        <View style={[styles.card, styles.shadowProp]}>
          <CarLock/>
        </View>
        
      </View>
    </>
  );
}

function MapScreen() {
  return (
    <View style={styles.container}>
      <Text>Map</Text>
    </View>
  );
}

function BatteryScreen() {
  return (
    <View style={styles.container}>
      <Text>Battery!</Text>
    </View>
  );
}

function ClimateControlScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Climate Control</Text>
    </View>
  );
}




function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel:false
        }}
      >
      <Tab.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({}) =>(
           <Icon name="car" size={30}/>
          ),
        }}
      />
      <Tab.Screen 
        name="Battery" 
        component={BatteryScreen}
        options={{
          tabBarIcon: ({})=>(
          <Icon name="car-battery" size={30}/>
          ),
        }}
      />
      <Tab.Screen 
        name="Map" 
        component={MapScreen} 
        options={{
          tabBarIcon: ({})=>(
            <Icon name="map-marker" size={30}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}


export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteName="Home">
        <Stack.Screen name="Climate" component={ClimateControlScreen}/>
      </Stack.Navigator>
      <MyTabs />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '90%',
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
