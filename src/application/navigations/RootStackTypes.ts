import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Home: undefined;
  Product: undefined;
  Client: undefined;
  Expense: undefined;
  Invoice: undefined;
  CreateProduct: undefined;
  CreateClient: undefined;
  CreateExpense: undefined;
  CreateInvoice: undefined;
};

export type SplashScreenProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;
export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type ProductScreenProps = NativeStackScreenProps<RootStackParamList, 'Product'>;
export type ClientScreenProps = NativeStackScreenProps<RootStackParamList, 'Client'>;
export type ExpenseScreenProps = NativeStackScreenProps<RootStackParamList, 'Expense'>;
export type InvoiceScreenProps = NativeStackScreenProps<RootStackParamList, 'Invoice'>;
export type CreateProductScreenProps = NativeStackScreenProps<RootStackParamList, 'CreateProduct'>;
export type CreateClientScreenProps = NativeStackScreenProps<RootStackParamList, 'CreateClient'>;
export type CreateExpenseScreenProps = NativeStackScreenProps<RootStackParamList, 'CreateExpense'>;
export type CreateInvoiceScreenProps = NativeStackScreenProps<RootStackParamList, 'CreateInvoice'>;
