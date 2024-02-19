import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={{
            uri: 'https://streamrealty.com/wp-content/uploads/2022/11/Location-Featured-Image-1920x1080-Denver.png' 
        }} style={styles.cardImage}/>
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Denver</Text>
            <Text style={styles.cardLabel}>Mile High City</Text>
            <Text style={styles.cardDescription}>
            Denver (/ˈdɛnvər/ DEN-vər) is a consolidated city and county, the capital, 
            and most populous city of the U.S. state of Colorado.[1] Its population was 
            715,522 at the 2020 census,[23] a 19.22% increase since 2010.[11] It is 
            the 19th-most populous city in the United States and the fifth most populous 
            state capital. It is the principal city of the Denver–Aurora–Lakewood 
            metropolitan statistical area, the most populous metropolitan statistical 
            area in Colorado and the first city of the Front Range Urban Corridor.
            </Text>
            <Text style={styles.cardFooter}>its official elevation is exactly one mile 
            (5280 feet or 1609.344 meters) above sea level.</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        paddingHorizontal: 8,
        fontSize: 24,
        fontWeight: 'bold'
    },
    card : {
        width: 350,
        height: 450,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,

    },
    cardElevated: {
        backgroundColor: '#c3ababa6',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }

    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 8
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription: {
        color: '#000000',
        fontSize: 12,
        marginBottom: 12,
        flexShrink: 1,
        marginTop: 6
    },
    cardFooter: {
        color: '#000000'
    }
})