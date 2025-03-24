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
  ReportSales: undefined;
  DetailClient: {item: any};
  DetailProduct: {item: any};
  UpdateBulkProduct: {item: any};
  ShareProductCatalog: {client?: any};
  Profile: undefined;
  DetailExpense: {item: any};
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
export type ReportSalesScreenProps = NativeStackScreenProps<RootStackParamList, 'ReportSales'>;
export type DetailClientScreenProps = NativeStackScreenProps<RootStackParamList, 'DetailClient'>;
export type DetailProductScreenProps = NativeStackScreenProps<RootStackParamList, 'DetailProduct'>;
export type UpdateBulkProductScreenProps = NativeStackScreenProps<RootStackParamList, 'UpdateBulkProduct'>;
export type ShareProductCatalogScreenProps = NativeStackScreenProps<RootStackParamList, 'ShareProductCatalog'>;
export type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
export type DetailExpenseScreenProps = NativeStackScreenProps<RootStackParamList, 'DetailExpense'>;

