import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './screens/SignUpScreen';
import Login from './screens/SignInScreen';
import Main from './screens/MainTabScreen';
import ForgotPassword from './screens/ForgotPassword';
import Feria from './screens/Feria'; 
const Stack = createStackNavigator();


export default function App() {


  return (
   <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="login"
          component={Login}
        />
        <Stack.Screen
          name="signup"
          component={SignUp}
        />
        <Stack.Screen
          name="forgotpass"
          component={ForgotPassword}
        />
        <Stack.Screen
          name="feria"
          component={Feria}
        />
         <Stack.Screen
          name="main"
          component={Main}
        />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}
