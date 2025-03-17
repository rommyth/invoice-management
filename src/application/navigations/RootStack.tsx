import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../presentation/screens/Home.screen';
import Splash from '../../presentation/screens/Splash.screen';
import Login from '../../presentation/screens/Login.screen';
import {RootStackParamList} from './RootStackTypes';
import Product from '../../presentation/screens/Product.screen';
import Client from '../../presentation/screens/Client.screen';
import Expense from '../../presentation/screens/Expense.screen';
import Invoice from '../../presentation/screens/Invoice.screen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} options={{animation: 'none'}} />
      <Stack.Screen name="Product" component={Product} options={{animation: 'none'}} />
      <Stack.Screen name="Client" component={Client} options={{animation: 'none'}} />
      <Stack.Screen name="Expense" component={Expense} options={{animation: 'none'}} />
      <Stack.Screen name="Invoice" component={Invoice} options={{animation: 'none'}} />
    </Stack.Navigator>
  );
};

export default RootStack;
