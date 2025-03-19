import {useNavigation, useRoute} from '@react-navigation/native';
import {DetailProductScreenProps} from '../../application/navigations/RootStackTypes';
import {useEffect, useState} from 'react';
import {BackHandler, ToastAndroid} from 'react-native';
import {
  storageDeleteProduct,
  StorageProductTypes,
  storageSetProduct,
  storageUpdateProduct,
} from '../../application/libs/local-storage/storage';

const useDetailProduct = () => {
  const navigation: DetailProductScreenProps['navigation'] = useNavigation();
  const route: DetailProductScreenProps['route'] = useRoute();

  const [product, setProduct] = useState<StorageProductTypes>(
    route.params?.item,
  );

  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (isEditMode) {
      const backAction = () => {
        toggleEditMode();
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      return () => backHandler.remove();
    }
  }, [isEditMode]);

  const toggleEditMode = () => setIsEditMode(!isEditMode);

  const onDelete = () => {
    storageDeleteProduct(product.product_id);
    navigation.goBack();
  };

  const onSubmitUpdate = () => {
    storageUpdateProduct(product);
    navigation.goBack();
    ToastAndroid.show('Product Updated', 2000);
  };

  return {
    product,
    setProduct,
    isEditMode,
    toggleEditMode,
    onDelete,
    onSubmitUpdate,
  };
};

export default useDetailProduct;
