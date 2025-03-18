import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {CreateProductScreenProps} from '../../application/navigations/RootStackTypes';

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
  const form = useForm<FormSchema>();

  const onSubmit = () => {
    navigation.goBack();
  };

  return {onSubmit};
};

export default useCreateProduct;
