import React, { useState } from 'react';
import { Button, TextInput, RadioButton } from 'react-native-paper';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
} from 'react-native';

export default function ForgotPassword(props) {
  return (
    <>
      <KeyboardAvoidingView behavior="position">
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Text
          style={{
            fontSize: 35,
            marginLeft: 18,
            marginTop: 10,
            color: '#3b3b3b',
          }}>
          welcome to
        </Text>
        <Text style={{ fontSize: 35, marginLeft: 18, color: 'blue' }}>
          Coders Never Quit
        </Text>
        <View
          style={{
            borderBottomColor: 'blue',
            borderBottomWidth: 4,
            borderRadius: 10,
            marginLeft: 20,
            marginRight: 150,
            marginTop: 4,
          }}
        />
        <Text style={{ fontSize: 20, marginLeft: 18, marginTop: 20 }}>
          ForgotPassword
        </Text>
        <TextInput
          label="PhoneNumber"
          mode="outlined"
          style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
          theme={{ color: { primary: 'blue' } }}
        />
        <TextInput
          label="Password"
          mode="outlined"
          style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
          theme={{ color: { primary: 'blue' } }}
        />
        <Button
          mode="contained"
          style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
          onPress=""> 
           ForgotPassword
        </Button>
      </KeyboardAvoidingView>
    </>
  );
}
