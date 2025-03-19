import {useNavigation} from '@react-navigation/native';
import {ProductScreenProps} from '../../application/navigations/RootStackTypes';
import {useState} from 'react';

const useProduct = () => {
  const navigation: ProductScreenProps['navigation'] = useNavigation();

  const [isCheckMode, setIsCheckMode] = useState(false);
  const [checkedItem, setCheckedItem] = useState<any[]>([]);
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

  const toggleShowModalDelete = () => {
    setShowModalDelete(!showModalDelete);
  };

  const toggleIsCheckMode = () => {
    setCheckedItem([]);
    setIsCheckMode(!isCheckMode);
  };

  // Navigate
  const navigateToDetailProduct = (item: any) => {
    navigation.navigate('DetailProduct');
  };

  const navigateToCreateProduct = () => {
    navigation.navigate('CreateProduct');
  };

  const navigateToUpdateBuikProduct = () => {
    navigation.navigate('UpdateBulkProduct');
    toggleIsCheckMode();
  };

  const navigateToShareProductCatalog = () => {
    navigation.navigate('ShareProductCatalog');
  };

  return {
    isCheckMode,
    onChecked,
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
