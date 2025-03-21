import {useQuery} from '@tanstack/react-query';
import {getListUserUsecase} from '../../domain/usecases/user/getListUserUsecase';
import {useMMKVObject} from 'react-native-mmkv';
import {
  KEY_TYPE,
  StorageProductTypes,
} from '../../application/libs/local-storage/storage';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenProps} from '../../application/navigations/RootStackTypes';

const useHome = () => {
  const navigation: HomeScreenProps['navigation'] = useNavigation();

  const [products] = useMMKVObject<StorageProductTypes[]>(KEY_TYPE.PRODUCTS);
  // const {data, isLoading} = useQuery({
  //   queryKey: ['users'],
  //   queryFn: () => getListUserUsecase(),
  //   throwOnError(error) {
  //     ToastAndroid.show(error.message, 2000);
  //     return false; // or false based on your logic
  //   },
  // });

  const navigateToCreateInvoice = () => {
    console.log('Navigate to Create Invoice');
  };

  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  return {products, navigateToCreateInvoice, navigateToProfile};
};

export default useHome;
