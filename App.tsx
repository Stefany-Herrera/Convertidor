import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Convertidor } from './src/components/Convertidor';
import ContadorScreen from './src/components/Contador';

export default function App() {
  return (
    /*<View style={styles.container}>
      
      <Convertidor/>
      <StatusBar style="auto" />
  </View>*/
  //<ContadorScreen />
  <Convertidor/>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffbb1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
