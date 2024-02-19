import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
        <Text style={styles.headingText}>Elevated Card</Text>
        <ScrollView horizontal={true} style={styles.container}>        
            <View style={[styles.card, styles.cardElevated]}>
                <Text>Tap</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>to</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>scroll</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>the</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>card</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>more ...</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>😇</Text>
            </View>   
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
      
        padding: 8
    },
    card: {
        flex:1,
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardElevated: {
        backgroundColor: '#fbeeeece',
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowColor: '#000000',
        shadowOpacity: 4,
        shadowRadius: 2
    }
})