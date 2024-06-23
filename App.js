/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';



const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>

       <WebView source={{ uri: 'https://chloeconor.com/' }} style={{ flex: 1 }} />
    
       </SafeAreaView>
      
    
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
export default App;
