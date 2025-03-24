import {useNavigation} from '@react-navigation/native';
import {ExpenseScreenProps} from '../../application/navigations/RootStackTypes';

const useExpense = () => {
  const navigation: ExpenseScreenProps['navigation'] = useNavigation();

  const navigateToCreateExpense = () => {
    navigation.navigate('CreateExpense');
  };

  const navugateToDetailExpense = (item: any) => {
    navigation.navigate('DetailExpense', {item});
  };

  return {navigateToCreateExpense, navugateToDetailExpense};
};

export default useExpense;
