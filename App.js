import React from "react";
import {StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CarLock from "./components/CarLock";
import Slider from "@react-native-community/slider";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs(){
  
return(
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
 )
}



function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Car"
        component={CarScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Climate Control" options={{ headerShown: false }} component={ClimateControlScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
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
      <View style={styles.card}>
        <Text>Battery!</Text>
      </View>

      <View style={styles.card}>
          <Text>Charging</Text>
          <Slider
              style={{width: 200, height: 50}}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="red"
              maximumTrackTintColor="grey"
            />
            <Text>100%</Text>
        </View>
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
    <>
     <View style={styles.container}>
        <View style={styles.card}>
          <Text>Quick Info</Text>
        </View>
      
        <View style={styles.card}>
          <Text>Temperature</Text>
          <Slider
              style={{width: 200, height: 50}}
              minimumValue={10}
              maximumValue={30}
              step={1}
              minimumTrackTintColor="red"
              maximumTrackTintColor="grey"
            />
            <Text>11c</Text>
        </View>
        <View style={styles.card}>
          <Text>Heated Seats</Text> 
          <Text>Defogger</Text>
        </View>
        
      </View>
    </>
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
      <MyTabs/>
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
    borderRadius: 3,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '95%',
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    //shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
