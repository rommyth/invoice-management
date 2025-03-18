import {useNavigation} from '@react-navigation/native';
import {ProductScreenProps} from '../../application/navigations/RootStackTypes';

const useProduct = () => {
  const navigation: ProductScreenProps['navigation'] = useNavigation();

  const navigateToCreateProduct = () => {
    navigation.navigate('CreateProduct');
  };

  return {navigateToCreateProduct};
};

export default useProduct;
