import { View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
import ElevatedCard from './components/ElevatedCard'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView style={styles.application}>
      <ScrollView>
        <FlatCard/>
        <ElevatedCard/>
        <FancyCard/>
        <ContactList/>
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  application: {
    backgroundColor: '#68127d'
  }
})
export default App