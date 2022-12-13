import React, {useState} from "react";
import {StyleSheet,SafeAreaView, ScrollView, Text, View, Button, Pressable } from 'react-native';
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
    screenOptions={({route}) => ({
      tabBarActiveBackgroundColor:'#F2F3F4',
      tabBarShowLabel:false,
    })}
    >
    <Tab.Screen 
      name="Vehicle"
      component={DefaultScreen}
      options={{
        tabBarIcon: ({}) =>(
        <Icon name="car" size={30} color={'black'}/>
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
      name="Settings" 
      component={SettingsScreen} 
      options={{
        tabBarIcon: ({})=>(
          <Icon name="cog" size={30}/>
        ),
      }}
    />
    </Tab.Navigator>
 )
}

function DefaultScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="De"
        component={VehicleScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Climate Control" options={{  }} component={ClimateControlScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

function BatteryScreen() {
  const[ChargeRate, setChargeRate] = useState(14);
  const[BatteryLevel, setBatteryLevel] = useState(20);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={{flexDirection: "row", alignItems:'baseline'}}>
          <Text style={{fontSize: 100, fontWeight: "bold"}}>200</Text>
          <Text style={{fontSize: 20, fontWeight: "bold"}}>km</Text>
        </View>
        <Text>Remaining</Text>
      </View>

      <View style={styles.card}>
          <Text>Charging Rate</Text>
          <Slider
              style={{width: 200, height: 50}}
              minimumValue={14}
              maximumValue={60}
              onValueChange={setChargeRate}
              value={ChargeRate}
              step={1}
              minimumTrackTintColor="#F4D03F"
              maximumTrackTintColor="grey"
              thumbTintColor="black"
            />
            <Pressable 
              style={[styles.button,{backgroundColor:'black'}]}
              onPress={()=>{setChargeRate((current) => current=14)}}>
                <Text style={styles.btntext}>{ChargeRate<15 ? "NOT CHARGING" : ChargeRate + " A"}</Text>
            </Pressable>
            
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
              thumbTintColor="black"
            />
            <Text>{ BatteryLevel + " %"} </Text>
        </View>
    </View>
  );
}

function SettingsScreen(){
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View style={styles.card}>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={{paddingRight: 10, fontSize: 60, fontWeight: "bold"}}>Settings</Text>
            <Icon name="arrow-right" size={30}/>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={{paddingRight: 10, fontSize: 60, fontWeight: "bold"}}>Settings</Text>
            <Icon name="arrow-right" size={30}/>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={{paddingRight: 10, fontSize: 60, fontWeight: "bold"}}>Settings</Text>
            <Icon name="arrow-right" size={30}/>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={{paddingRight: 10, fontSize: 60, fontWeight: "bold"}}>Settings</Text>
            <Icon name="arrow-right" size={30}/>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={{paddingRight: 10, fontSize: 60, fontWeight: "bold"}}>Settings</Text>
            <Icon name="arrow-right" size={30}/>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={{paddingRight: 10, fontSize: 60, fontWeight: "bold"}}>Settings</Text>
            <Icon name="arrow-right" size={30}/>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={{paddingRight: 10, fontSize: 60, fontWeight: "bold"}}>Settings</Text>
            <Icon name="arrow-right" size={30}/>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={{paddingRight: 10, fontSize: 60, fontWeight: "bold"}}>Settings</Text>
            <Icon name="arrow-right" size={30}/>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={{paddingRight: 10, fontSize: 60, fontWeight: "bold"}}>Settings</Text>
            <Icon name="arrow-right" size={30}/>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={{paddingRight: 10, fontSize: 60, fontWeight: "bold"}}>Settings</Text>
            <Icon name="arrow-right" size={30}/>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

function ClimateControlScreen(){

  const [userTemp, setUserTemp] = useState(9)
  const [RearDefogger, setRearDefogger] = useState(false);
  const [FrontDefogger, setFrontDefogger] = useState(false);
  const [LeftHeatedSeat, setLeftHeatedSeat] = useState(0);
  const [RightHeatedSeat, setRightHeatedSet] = useState(0);
  
  return (
    <>
     <View style={styles.container}>

        <View style={styles.card}>
          <View style={{flexDirection: "row", alignItems:'baseline'}}>
            <Text style={{fontSize: 50, fontWeight: "bold"}}>22</Text>
            <Text style={{fontSize: 20, fontWeight: "bold"}}>c</Text>
          </View>
          <Text>Current Temperature</Text>
        </View>

        {/* Defogger */}
        <View style={[styles.card]}>
          <View style={{paddingBottom: 10}}>
            <Text style={{fontWeight: "bold", fontFamily: "Roboto"}}>Defogger</Text>
          </View>
          <View style={{flexDirection:"row"}}>
              <Pressable
                style={[{backgroundColor: FrontDefogger ? '#D1230F': 'black'}, styles.button]}
                onPress={() => {setFrontDefogger((FrontDefogger ? false: true));
                }}>
                <Text style={[styles.btntext,{fontSize: 20}]}>F <Icon name="car-defrost-front" size={20}/> {FrontDefogger==true ? "ON" : "OFF"}</Text>
              </Pressable>

              <Pressable
                style={[{backgroundColor: RearDefogger ? '#D1230F': 'black'}, styles.button]}
                onPress={() => {setRearDefogger((RearDefogger ? false: true)); 
                }}>
                <Text style={[styles.btntext,{fontSize: 20}]}>R <Icon name="car-defrost-rear" size={20}/> {RearDefogger==true ? "ON" : "OFF"}</Text>
              </Pressable>
          </View>

        </View>

        {/* Heated Seats */}
        <View style={[styles.card]}>
          <View style={{paddingBottom: 10}}>
            <Text style={{fontWeight: "bold", fontFamily: "Roboto"}}>Heated Seats</Text>
          </View>
          <View style={{flexDirection: "row"}}>
              <Pressable
                style={[{backgroundColor: LeftHeatedSeat ? '#D1230F': 'black'}, styles.button]}
                onPress={() => {setLeftHeatedSeat(current=>(current>2?current=0:current+1))}}>
                <Text style={[styles.btntext,{fontSize: 20}]}>L <Icon name="car-seat-heater" size={20}/> {LeftHeatedSeat>0 ? LeftHeatedSeat : "OFF"}</Text>
              </Pressable>
              <Pressable
                style={[{backgroundColor: RightHeatedSeat ? '#D1230F': 'black'}, styles.button]}
                onPress={()=>{setRightHeatedSet(current=>(current>2?current=0:current+1))}}>
                <Text style={[styles.btntext,{fontSize: 20}]}>R <Icon name="car-seat-heater" size={20}/> {RightHeatedSeat>0 ? RightHeatedSeat : "OFF"}</Text>
              </Pressable>
          </View>

        </View>

        {/* Temperature Slider */}
        <View style={styles.card}>
          <Text style={{paddingBottom: 10}}>Set Temperature</Text>
          <Slider
              style={{width: 200, height: 50}}
              minimumValue={9}
              maximumValue={30}
              onValueChange={setUserTemp}
              value={userTemp}
              step={1}
              minimumTrackTintColor="#E74C3C"
              maximumTrackTintColor="#3498DB"
              thumbTintColor="black"
            />
            <Pressable 
              style={[styles.button,{backgroundColor:'black'}]}
              onPress={()=>{setUserTemp((current) => current=9)}}>
                <Text style={styles.btntext}>{userTemp<10 ? "OFF" : userTemp + " C"}</Text>
            </Pressable>
        </View>
      </View>
    </>
  );
}

function VehicleScreen({navigation}){
  const [pressed, setPressed] = useState(0);
  const [locked, setLocked] = useState(false);

  return(

      <View style={styles.container}>
        <View style={styles.card}>
            <Text style={{fontSize:30, fontWeight:'bold'}}> Hello, Name</Text>
        </View>

        <View style={styles.card}>
          <View style={{flexDirection: "row", alignItems:'baseline'}}>
            <Text style={{fontSize: 100, fontWeight: "bold"}}>200</Text>
            <Text style={{fontSize: 20, fontWeight: "bold"}}>km</Text>
          </View>
          <View style={{flexDirection: "row", alignItems:'baseline'}}>     
              <Text style={{fontSize: 30, fontWeight: "bold", paddingRight:20}}>22<Icon name="temperature-celsius" size={20}/></Text>
              <Text style={{fontSize: 30, fontWeight: "bold"}}>22<Icon name="percent" size={20}/></Text>
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
              <Text style={styles.btntext}>Climate Control <Icon name="fan" size={20}/></Text>
            </Pressable>
        </View>
        
        <View style={[styles.card]}>
          
            <Pressable 
              style={{paddingBottom:5}}
              onPress={() => {setLocked((locked ? false: true));}}>
             <Icon name={locked ? "lock-outline" : "lock-open-variant-outline"} size={60}/>
            </Pressable>
            <View style={{backgroundColor: locked? '#2ECC71': '#A93226', paddingHorizontal: 25, paddingVertical:5, borderRadius: 5}}/>
  
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
    //alignItems:'center',
  },
  card: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-around',
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
  scrollView: {
    //marginHorizontal: 20,
  },
  // shadowProp: {
  //   shadowColor: '#171717',
  //   shadowOffset: {width: -2, height: 4},
  //   shadowOpacity: 0.3,
  //   shadowRadius: 2,
  // },
});
