import {useNavigation} from '@react-navigation/native';
import {CreateClientScreenProps} from '../../application/navigations/RootStackTypes';

const useCreateClient = () => {
  const navigation: CreateClientScreenProps['navigation'] = useNavigation();

  const onSubmit = () => {
    navigation.goBack();
  };

  return {onSubmit};
};

export default useCreateClient;
