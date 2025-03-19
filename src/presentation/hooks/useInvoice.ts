import {useNavigation} from '@react-navigation/native';
import {InvoiceScreenProps} from '../../application/navigations/RootStackTypes';

const useInvoice = () => {
  const navigation: InvoiceScreenProps['navigation'] = useNavigation();

  const navigateToCreateInvoice = () => {
    navigation.navigate('CreateInvoice');
  };

  const navigateToReportSales = () => {
    navigation.navigate('ReportSales');
  };

  return {navigateToCreateInvoice, navigateToReportSales};
};

export default useInvoice;
