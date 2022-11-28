import React from "react";
import {StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CarLock from "./components/CarLock";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeScreen() {
  return (
     <Tab.Navigator
      screenOptions={{
        tabBarShowLabel:false
        }}
      >
      <Tab.Screen 
        name="Car"
        component={CarScreen}
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

function SettingsScreen(){
  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
    </View>
  );
}

function ProfileScreen(){
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
}

function ClimateControlScreen(){
  return (
    <View style={styles.container}>
      <Text>Climate Control</Text>
    </View>
  );
}

function CarScreen({navigation}){
  return(
      <View style={styles.container}>
        
        <View style={[styles.card, styles.shadowProp]}>
            <Button
              title="Climate Control"
              onPress={() => navigation.navigate('Climate Control')}
            />
        </View>
        
        <View style={[styles.card, styles.shadowProp]}>
          <CarLock/>
        </View>
  
      </View> 
  )
}




export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Climate Control" component={ClimateControlScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
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
