import { View, Text } from 'react-native'
import React from 'react'
import Card from '../components/InfoCard';

export default function Screen1() {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Card></Card>
    </View>
  )   
}