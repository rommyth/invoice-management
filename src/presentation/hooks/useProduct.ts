import {useNavigation} from '@react-navigation/native';
import {ProductScreenProps} from '../../application/navigations/RootStackTypes';

const useProduct = () => {
  const navigation: ProductScreenProps['navigation'] = useNavigation();

  const navigateToDetailProduct = () => {
    navigation.navigate('DetailProduct');
  };

  const navigateToCreateProduct = () => {
    navigation.navigate('CreateProduct');
  };

  return {navigateToCreateProduct, navigateToDetailProduct};
};

export default useProduct;
