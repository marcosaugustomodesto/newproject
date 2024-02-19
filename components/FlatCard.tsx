import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Card</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 4,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8
  },
  card: { 
    flex: 1,
    width: 110,
    height: 100,
    borderRadius: 4,
    margin:8,
    justifyContent: 'center',
    alignItems: 'center'

  },
  cardOne: {
    backgroundColor: '#ff3434f0'
  },
  cardTwo: {
    backgroundColor: '#5457ffb5'
  },
  cardThree: {
    backgroundColor: '#87ee54'
  }
})