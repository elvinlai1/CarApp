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
      name="Vehicle"
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
  const[BatteryLevel, setBatteryLevel] = useState(20);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>200 KM</Text>
        <Text>Remaining</Text>
      </View>

      <View style={styles.card}>
          <Text>Charging Rate</Text>
          <Slider
              style={{width: 200, height: 50}}
              minimumValue={14}
              maximumValue={60}
              onValueChange={setChargeRate}
              step={1}
              minimumTrackTintColor="yellow"
              maximumTrackTintColor="grey"
            />
            
            <Button title={ ChargeRate<15 ? "NOT CHARGING" : ChargeRate + " A"} onPress={() => {setChargeRate((current)=>current=14);}}></Button>
        </View>
        <View style={styles.card}>
          <Text>Set Maximum Battery Level</Text>
          <Slider
              style={{width: 200, height: 50}}
              minimumValue={20}
              maximumValue={100}
              onValueChange={setBatteryLevel}
              step={1}
              minimumTrackTintColor="green"
              maximumTrackTintColor="grey"
            />
            <Text>{ BatteryLevel + " %"} </Text>
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

  const [userTemp, setUserTemp] = useState(9)
  const [pressed, setPressed] = useState(0);
  
  return (
    <>
     <View style={styles.container}>

        <View style={styles.card}>
          <Text>Quick Info</Text>
          <Text>Internal Temperature</Text>
        </View>

        {/* Defogger */}
        <View style={[styles.card]}>
          <View style={{paddingBottom: 20}}>
            <Text> Defogger</Text>
          </View>
          <View style={{flexDirection:"row"}}>
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
                <Text style={styles.btntext}>Front</Text>
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
                <Text style={styles.btntext}>Rear</Text>
              </Pressable>
          </View>

        </View>

        {/* Heated Seats */}
        <View style={[styles.card]}>
          <View style={{paddingBottom: 20}}>
            <Text>Heated Seats</Text>
          </View>
          <View style={{flexDirection: "row"}}>

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
                <Text style={styles.btntext}>Left Front</Text>
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
                <Text style={styles.btntext}>Right Front</Text>
              </Pressable>

          </View>

        </View>

        {/* Temperature Slider */}
        <View style={styles.card}>
          <Text>Set Temperature</Text>
          <Slider
              style={{width: 200, height: 50}}
              minimumValue={9}
              maximumValue={30}
              onValueChange={setUserTemp}
              value={userTemp}
              step={1}
              minimumTrackTintColor="red"
              maximumTrackTintColor="blue"
            />
            <Button title={ userTemp<10 ? "OFF" : userTemp + " C"} onPress={()=> {setUserTemp((current) => current=9);}}></Button>
        </View>




      </View>
    </>
  );
}

function CarScreen({navigation}){
  const [pressed, setPressed] = useState(0);
  return(

      <View style={styles.container}>


        {/* Buttons */}

        <View style={[styles.card]}>

                  
              <Text style={{marginBottom:20}}>Text</Text>

          
              <View style={{flexDirection:"row"}}>
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

        {/* Climate Control */}
        
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
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderRadius: 3,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '90%',
    marginVertical: 10,
    shadowColor: '#171717',
    //shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  button:{
    alignText: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 20,
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
