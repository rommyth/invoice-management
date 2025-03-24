import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {CreateExpenseScreenProps} from '../../application/navigations/RootStackTypes';

const useCreateExpense = () => {
  const navigation: CreateExpenseScreenProps['navigation'] = useNavigation();

  const [price, setPrice] = useState(0);

  const onSubmit = () => {
    navigation.goBack();
  };

  return {price, setPrice, onSubmit};
};

export default useCreateExpense;
