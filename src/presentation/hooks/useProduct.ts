import {useNavigation} from '@react-navigation/native';
import {ProductScreenProps} from '../../application/navigations/RootStackTypes';
import {useState} from 'react';
import {useMMKVObject} from 'react-native-mmkv';
import {
  KEY_TYPE,
  storageDeleteSelectedProducts,
  StorageProductTypes,
} from '../../application/libs/local-storage/storage';

const useProduct = () => {
  const navigation: ProductScreenProps['navigation'] = useNavigation();

  const [products, setProducts] = useMMKVObject<StorageProductTypes[]>(
    KEY_TYPE.PRODUCTS,
  );

  const [isCheckMode, setIsCheckMode] = useState(false);
  const [checkedItem, setCheckedItem] = useState<StorageProductTypes[]>([]);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const onChecked = (item: any) => {
    setCheckedItem(prev => {
      const exists = prev.some(i => i === item); // Check if item exists

      if (exists) {
        const current = prev.filter(i => i !== item); // Remove if exists
        if (current.length) {
          return current;
        } else {
          toggleIsCheckMode();
          return [];
        }
      } else {
        return [...prev, item]; // Add if not exists
      }
    });
  };

  const onDeleteSelectedItems = () => {
    storageDeleteSelectedProducts(checkedItem);
    toggleShowModalDelete();
    toggleIsCheckMode();
  };

  const toggleShowModalDelete = () => {
    setShowModalDelete(!showModalDelete);
  };

  const toggleIsCheckMode = () => {
    setCheckedItem([]);
    setIsCheckMode(!isCheckMode);
  };

  // Navigate
  const navigateToDetailProduct = (item: StorageProductTypes) => {
    navigation.navigate('DetailProduct', {item: item});
  };

  const navigateToCreateProduct = () => {
    navigation.navigate('CreateProduct');
  };

  const navigateToUpdateBuikProduct = () => {
    navigation.navigate('UpdateBulkProduct', {item: checkedItem});
    toggleIsCheckMode();
  };

  const navigateToShareProductCatalog = () => {
    navigation.navigate('ShareProductCatalog');
  };

  return {
    products,
    isCheckMode,
    onChecked,
    onDeleteSelectedItems,
    toggleIsCheckMode,
    checkedItem,
    showModalDelete,
    toggleShowModalDelete,
    navigateToCreateProduct,
    navigateToDetailProduct,
    navigateToUpdateBuikProduct,
    navigateToShareProductCatalog,
  };
};

export default useProduct;
