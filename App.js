import { View, Text, Platform } from 'react-native';
import React from 'react';
import { Home, Screen1, Screen2 } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
          name="Screen1" 
          component={Screen1} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <MaterialCommunityIcons name="face-man-profile" size={24} color={focused ? "#57B8FF": "#111"} />
                  <Text style={{fonSize: 12, color:focused ? "#57B8FF": "#111"}}>Info</Text>
                </View>
              )
            }
          }}
        />
        <Tab.Screen 
          name="Home" 
          component={Home}
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View
                 style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#57B8FF",
                  width: Platform.OS == "ios" ? 50 : 60,
                  height: Platform.OS == "ios" ? 50 : 60,
                  top: Platform.OS == "ios" ? -10 : -20,
                  borderRadius: Platform.OS == "ios" ? 25 : 30
                 }}
                >
                  <Entypo name="home" size={24} color={focused ? "#fff": "#111"} />
                </View>
              )
            }
           }}
        />
        <Tab.Screen 
          name="Screen2" 
          component={Screen2} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Ionicons name="fast-food" size={24} color={focused ? "#57B8FF": "#111"} />
                  <Text style={{fonSize: 12, color:focused ? "#57B8FF": "#111"}}>Comida</Text>
                </View>
              )
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}