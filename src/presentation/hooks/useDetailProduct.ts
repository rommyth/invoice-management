import {useNavigation} from '@react-navigation/native';
import {CreateProductScreenProps} from '../../application/navigations/RootStackTypes';
import {useEffect, useState} from 'react';
import {BackHandler} from 'react-native';

const useDetailProduct = () => {
  const navigation: CreateProductScreenProps['navigation'] = useNavigation();

  const [isEditMode, setIsEditMode] = useState(false);
  const [price, setPrice] = useState<number>(0);

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

  const onSubmit = () => {
    navigation.goBack();
  };

  return {price, setPrice, isEditMode, toggleEditMode, onSubmit};
};

export default useDetailProduct;
