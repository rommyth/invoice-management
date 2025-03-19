import {useNavigation} from '@react-navigation/native';
import {ClientScreenProps} from '../../application/navigations/RootStackTypes';

const useClient = () => {
  const navigation: ClientScreenProps['navigation'] = useNavigation();

  const navigateToCreateClient = () => {
    navigation.navigate('CreateClient');
  };

  const navigateToDetailClient = () => {
    navigation.navigate('DetailClient');
  };

  return {navigateToDetailClient, navigateToCreateClient};
};

export default useClient;
