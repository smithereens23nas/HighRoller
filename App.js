import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Component } from 'react';
import OddsComponent from './src/components/Odds'

export default function App() {
  return (
    <View style={styles.container}>
  <OddsComponent 
  date={"May 25th"}
  />
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
