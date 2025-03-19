import {useNavigation} from '@react-navigation/native';
import {CreateProductScreenProps} from '../../application/navigations/RootStackTypes';
import {useState} from 'react';
import {
  KEY_TYPE,
  StorageProductTypes,
} from '../../application/libs/local-storage/storage';
import {generateRandomString} from '../../application/utils/RandomString';
import {useMMKVObject} from 'react-native-mmkv';
import {ToastAndroid} from 'react-native';

const useCreateProduct = () => {
  const navigation: CreateProductScreenProps['navigation'] = useNavigation();
  const [products, setProducts] = useMMKVObject<StorageProductTypes[]>(
    KEY_TYPE.PRODUCTS,
  );

  const [form, setForm] = useState<StorageProductTypes>({
    product_id: generateRandomString(),
    product_image: '',
    product_name: '',
    product_stok: 0,
    product_serial: '',
    product_price: 0,
  });

  const onSubmit = () => {
    setProducts(prev => [...(prev || []), form]);
    navigation.goBack();
    ToastAndroid.show('Product Added', 2000);
  };

  return {form, setForm, onSubmit};
};

export default useCreateProduct;
