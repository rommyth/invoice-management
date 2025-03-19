import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {CreateProductScreenProps} from '../../application/navigations/RootStackTypes';
import {useState} from 'react';

type FormSchema = {
  image: any;
  name: string;
  price: string;
  stok: string;
  serial: string;
  category: any;
};

const useCreateProduct = () => {
  const navigation: CreateProductScreenProps['navigation'] = useNavigation();
  const [price, setPrice] = useState<number>(0);

  const onSubmit = () => {
    navigation.goBack();
  };

  return {price, setPrice, onSubmit};
};

export default useCreateProduct;
