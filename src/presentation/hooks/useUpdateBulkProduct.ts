import {useNavigation, useRoute} from '@react-navigation/native';
import {UpdateBulkProductScreenProps} from '../../application/navigations/RootStackTypes';
import {useState} from 'react';
import {
  StorageProductTypes,
  storageUpdateSelectedProducts,
} from '../../application/libs/local-storage/storage';
import {ToastAndroid} from 'react-native';

const useUpdateBulkProduct = () => {
  const navigation: UpdateBulkProductScreenProps['navigation'] =
    useNavigation();
  const route: UpdateBulkProductScreenProps['route'] = useRoute();
  const [products, setProducts] = useState<StorageProductTypes[]>(
    route.params.item,
  );

  const onChangePrice = (id: string, newPrice: string) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.product_id === id
          ? {...product, product_price: Number(newPrice) || 0}
          : product,
      ),
    );
  };

  const onSubmitUpdate = () => {
    storageUpdateSelectedProducts(products);
    ToastAndroid.show('Success save', 2000);
    navigation.goBack();
  };

  return {products, onChangePrice, onSubmitUpdate};
};

export default useUpdateBulkProduct;
