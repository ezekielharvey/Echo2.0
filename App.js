/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {StyleSheet, View} from 'react-native';
 import { Amplify, Auth } from 'aws-amplify';
 import awsconfig from './src/aws-exports'
 Amplify.configure(awsconfig)
 
 import Navigation from './src/Navigation';
 
 const App = () => {
  // Auth.signOut()
   return (
     <View style={styles.root}>
       <Navigation />
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   root: {
     flex: 1,
   },
 });

 export default (App);
 