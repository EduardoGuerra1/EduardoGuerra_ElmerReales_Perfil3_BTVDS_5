import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Card from '../components/InfoCard';

const foodfav = [
  {
    image: require('../assets/carne.jpg'),
    name: 'Carne asada',
    code: 'Carne de res marinada y asada a la parrilla, servida con guarniciones como arroz, frijoles, y guacamole',
    id: 1
  },
  {
    image: require('../assets/Pan.jpg'),
    name: 'Pan con pollo',
    code: 'Sándwich de pan suave relleno de pollo desmenuzado sazonado, con lechuga, tomate, y salsa especial',
    id: 2
  },
  {
    image: require('../assets/pupusas.jpg'),
    name: 'Pupusas',
    code: 'Tortillas gruesas de maíz rellenas de queso, frijoles, y/o chicharrón, servidas con curtido y salsa.',
    id: 3
  },
  {
    image: require('../assets/sopa_tortilla.jpg'),
    name: 'Sopa de tortilla',
    code: 'Sopa de tomate y chile con tiras de tortilla frita, aguacate, queso y crema',
    id: 4
  },
  {
    image: require('../assets/tacos.jpg'),
    name: 'Tacos',
    code: 'Tortillas de maíz o harina rellenas de carne, pollo, o vegetales, acompañadas de cebolla, cilantro, y salsa',
    id: 5
  },
  {
    image: require('../assets/tamales.jpg'),
    name: 'Tamales',
    code: 'Masa de maíz rellena de carne, pollo, o vegetales, envuelta en hojas de maíz o plátano y cocida al vapor',
    id: 6
    },
]

export default function Screen2() {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", marginTop: 30 }}>
      <FlatList
        data={foodfav}
        renderItem={({ item }) => {
          return <Card info={item} />;
        }}
        keyExtractor={(foodfav) => foodfav.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}