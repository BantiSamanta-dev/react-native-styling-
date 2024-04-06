import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react'
import FlatCards from './components/FlatCards';
import Elevatedcards from './components/Elevatedcards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import Contactlist from './components/Contactlist';


const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
        <Elevatedcards/>
        <FancyCard/>
        <Contactlist/>
      <ActionCard/>
      
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})