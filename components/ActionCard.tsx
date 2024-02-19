import { StyleSheet, Text, View, Linking, Image, TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink);
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
          <View style={styles.headingContainer}>
              <Text style={styles.headerText}>
                What's new in Javascript 21 - ES21
              </Text>
          </View>
          <Image source={{
            uri: 'https://blog.scielo.org/wp-content/uploads/2018/03/blogs.png',
          }}
          style={styles.cardImage}/>
         <View style={styles.bodyContainer}>
              <Text numberOfLines={3}>
              JavaScript, often abbreviated as JS, is a programming language 
              and core technology of the World Wide Web, alongside HTML and CSS. 
              As of 2024, 98.9% of websites use JavaScript on the client side 
              for webpage behavior, often incorporating third-party libraries.
              </Text>
         </View>
         <View style={styles.footerContainer}>
              <TouchableOpacity onPress={() => openWebsite('https://www.linkedin.com/in/marcos-augusto-modesto-14b21016/')} >
                   <Text style={styles.socialLink}>Read More</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openWebsite('https://www.instagram.com/marcosaugustomodesto15/')}>
                   <Text style={styles.socialLink}>Follow Me</Text>
              </TouchableOpacity>
         </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize:24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16
  },
  elevatedCard: {
    backgroundColor: '#ff8400',
    elevation: 3,
    shadowOffset: {
      width:1,
      height: 1
    },
    shadowColor: '#333',
    shadowOpacity: 0.4
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600'
  },
  cardImage: {
    height: 190
  },
  bodyContainer: {
    padding: 10
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  socialLink: {
    fontSize: 16,
    color:'#000000',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6
  }
})