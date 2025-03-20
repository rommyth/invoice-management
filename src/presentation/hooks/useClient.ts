import {useNavigation} from '@react-navigation/native';
import {ClientScreenProps} from '../../application/navigations/RootStackTypes';
import {useMMKVObject} from 'react-native-mmkv';
import {
  KEY_TYPE,
  StorageClientTypes,
} from '../../application/libs/local-storage/storage';

const useClient = () => {
  const navigation: ClientScreenProps['navigation'] = useNavigation();
  const [clients, setClients] = useMMKVObject<StorageClientTypes[]>(
    KEY_TYPE.CLIENTS,
  );

  const navigateToCreateClient = () => {
    navigation.navigate('CreateClient');
  };

  const navigateToDetailClient = (item: StorageClientTypes) => {
    navigation.navigate('DetailClient', {item});
  };

  const navigateToShareProductCatalog = (item: StorageClientTypes) => {
    navigation.navigate('ShareProductCatalog', {client: item});
  };

  return {
    clients,
    setClients,
    navigateToDetailClient,
    navigateToCreateClient,
    navigateToShareProductCatalog,
  };
};

export default useClient;
