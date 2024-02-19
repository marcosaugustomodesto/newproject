import { ScrollView, StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Jason Tatum',
            status: 'Celtics player',
            imageUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065648.png&amp;w=350&amp;h=254'
        },
        {
            uid: 2,
            name: 'Lebron James',
            status: 'Lakers player',
            imageUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&amp;w=350&amp;h=254'
        },
        {
            uid: 3,
            name: 'Devin Booker',
            status: 'Phoenix Suns player',
            imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626164.png'
        },
        {
            uid: 4,
            name: 'NiKola Jokic',
            status: 'Denver Nuggets player',
            imageUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3112335.png&amp;w=350&amp;h=254'
        },
        {
            uid: 5,
            name: 'Jimmy Butler',
            status: 'Miami Heat player',
            imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202710.png'
        },
        {
            uid: 6,
            name: 'Stephen Curry',
            status: 'Golden State Warriors player',
            imageUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&amp;w=350&amp;h=254'
        },
    ];
    return (
        <View>
          <Text style={styles.headingText}>ContactList</Text>
          <ScrollView style={styles.container} scrollEnabled={false}>
            {contacts.map(({ uid, name, status, imageUrl }) => (
              <View key={uid} style={styles.userCard}>
                <Image source={{ uri: imageUrl }} style={styles.userImage} />
                <View>
                  <Text style={styles.userName}>{name}</Text>
                  <Text style={styles.userStatus}>{status}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      );
}

const styles = StyleSheet.create({
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8
    },
    container: {
      paddingHorizontal: 16,
      marginBottom: 4
    },
    userCard: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 3,
      backgroundColor: 'rgb(179, 32, 179)',
      borderRadius: 10
    },
    userImage: {
      width: 60,
      height: 60,
      borderRadius: 60/2,
      marginRight: 14,
    },
    userName: {
      fontSize: 16,
      fontWeight: '600',
      color: '#1317e0'
    },
    userStatus: {
      fontSize: 12
    }
})