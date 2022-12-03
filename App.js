import React, {useState} from "react";
import {StyleSheet, Text, View, Button, Pressable } from 'react-native';
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
      <Stack.Screen name="Climate Control" options={{  }} component={ClimateControlScreen} />
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
  const[ChargeRate, setChargeRate] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Battery!</Text>
      </View>

      <View style={styles.card}>
          <Text>Charging</Text>
          <Slider
              style={{width: 200, height: 50}}
              minimumValue={14}
              maximumValue={60}
              onValueChange={setChargeRate}
              step={1}
              minimumTrackTintColor="green"
              maximumTrackTintColor="grey"
            />
            <Text>{ ChargeRate<15 ? "NOT CHARGING" : ChargeRate + " A"} </Text>
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

  const [Temp, setTemp] = useState(10)
  
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
              onValueChange={setTemp}
              step={1}
              minimumTrackTintColor="red"
              maximumTrackTintColor="blue"
            />
            <Text>{Temp} C</Text>
        </View>
        <View style={styles.card}>
          
          <Text>Defogger</Text>
          <Button style={styles.button} title="Front"/>
          <Button style={styles.button} title="Rear"/>
        </View>
        
      </View>
    </>
  );
}

function CarScreen({navigation}){
  const [pressed, setPressed] = useState(0);
  return(
      <View style={styles.container}>
        <View style={[styles.card]}>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            
              <Pressable 
                style={({pressed}) => [
                  {
                    backgroundColor: pressed 
                    ? 'grey'
                    : 'black'
                  },
                  styles.button,
                  ]}
                  onPress={() => {setPressed((current) => current+1); 
                }}>
                <Text style={styles.btntext}>Title</Text>
              </Pressable>

              <Pressable 
                style={({pressed}) => [
                  {
                    backgroundColor: pressed 
                    ? 'grey'
                    : 'black'
                  },
                  styles.button,
                  ]}
                  onPress={() => {setPressed((current) => current+1); 
                }}>
                <Text style={styles.btntext}>Title</Text>
              </Pressable>
          </View>
        </View>
        
        <View style={[styles.card, {flexDirection:"row"}]}>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed
                  ? 'grey'
                  : 'black'
                },
                styles.button,
              ]}
              onPress={() => navigation.navigate('Climate Control')
            }>
              <Text style={styles.btntext}>Climate Control</Text>
            </Pressable>
        </View>
        
        <View style={[styles.card]}>
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
    backgroundColor: 'white',
    borderRadius: 3,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '95%',
    marginVertical: 10,
    shadowColor: '#171717',
    //shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  button:{
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 3,
  },
  btntext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  // shadowProp: {
  //   shadowColor: '#171717',
  //   shadowOffset: {width: -2, height: 4},
  //   shadowOpacity: 0.3,
  //   shadowRadius: 2,
  // },
});
