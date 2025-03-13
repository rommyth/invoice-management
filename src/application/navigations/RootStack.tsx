import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../presentation/screens/Home.screen';
import Splash from '../../presentation/screens/Splash.screen';
import Login from '../../presentation/screens/Login.screen';
import {RootStackParamList} from './RootStackTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default RootStack;
