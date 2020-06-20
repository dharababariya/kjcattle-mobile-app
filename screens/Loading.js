import * as React from 'react';
import {
 ActivityIndicator,View,StyleSheet
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

export default function Loading() {
  return (
    <View style={styles.loading}> 
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
}


const styles = StyleSheet.create({
  loading:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})