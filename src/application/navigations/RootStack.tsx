import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootStackTypes';
import Home from '../../presentation/screens/Home.screen';
import Splash from '../../presentation/screens/Splash.screen';
import Login from '../../presentation/screens/Login.screen';
import Product from '../../presentation/screens/Product.screen';
import Client from '../../presentation/screens/Client.screen';
import Expense from '../../presentation/screens/Expense.screen';
import Invoice from '../../presentation/screens/Invoice.screen';
import CreateProduct from '../../presentation/screens/CreateProduct.screen';
import CreateClient from '../../presentation/screens/CreateClient.screen';
import CreateExpense from '../../presentation/screens/CreateExpense.screen';
import CreateInvoice from '../../presentation/screens/CreateInvoice.screen';
import ReportSales from '../../presentation/screens/ReportSales.screen';
import DetailClient from '../../presentation/screens/DetailClient.screen';
import DetailProduct from '../../presentation/screens/DetailProduct';

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
      <Stack.Screen name="CreateProduct" component={CreateProduct} />
      <Stack.Screen name="CreateClient" component={CreateClient} />
      <Stack.Screen name="CreateExpense" component={CreateExpense} />
      <Stack.Screen name="CreateInvoice" component={CreateInvoice} />
      <Stack.Screen name="ReportSales" component={ReportSales} />
      <Stack.Screen name="DetailClient" component={DetailClient} />
      <Stack.Screen name="DetailProduct" component={DetailProduct} />
    </Stack.Navigator>
  );
};

export default RootStack;
