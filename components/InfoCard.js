import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const InfoCard =  () =>{
    return(
        <View style={styles.cardContainer}>
            <Text style={styles.cardText}>
                 laborum.
            </Text>
        </View>
    )
}

const deviceWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({
    cardContainer: {
        width: deviceWidth,
        backgroundColor: '#49392C'

    },
    cardText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default InfoCard;