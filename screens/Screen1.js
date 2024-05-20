import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Card from '../components/InfoCard';

const infoStudents =[
  {
  image: require('../assets/edu.jpeg'),
  name: 'Eduardo Josué Guerra Sagastizado',
  code: '20220195',
  id: 1
  },
  {
    image: require('../assets/elmer.jpg'),
    name: 'Elmer Ivan Reales Flores',
    code: '20220240',
    id: 2
    },
]


export default function Screen1() {
  return (
    <View style={{alignItems: "center", justifyContent: "center", marginTop:30}}>
      <FlatList
        data={infoStudents}
        renderItem={({ item }) => {
          return <Card info={item} />;
        }}
        keyExtractor={(infoStudents) => infoStudents.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )   
}