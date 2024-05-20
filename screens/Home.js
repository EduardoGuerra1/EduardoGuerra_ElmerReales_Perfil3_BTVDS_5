import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text style={styles.title}>Perfil 3</Text>
      <Text style={styles.text}>Menu de navegación en React Native</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: "#111",
    fontWeight: '400'
  },
  text:{
    fontSize: 20,
    color: "#111",
    fontWeight: '300'
  }
})