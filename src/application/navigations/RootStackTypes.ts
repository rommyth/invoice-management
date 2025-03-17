import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Home: undefined;
  Product: undefined;
  Client: undefined;
  Expense: undefined;
  Invoice: undefined;
};

export type SplashScreenProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;
export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type ProductScreenProps = NativeStackScreenProps<RootStackParamList, 'Product'>;
export type ClientScreenProps = NativeStackScreenProps<RootStackParamList, 'Client'>;
export type ExpenseScreenProps = NativeStackScreenProps<RootStackParamList, 'Expense'>;
export type InvoiceScreenProps = NativeStackScreenProps<RootStackParamList, 'Invoice'>;
