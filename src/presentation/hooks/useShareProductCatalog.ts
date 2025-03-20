import {useCallback, useRef, useState} from 'react';
import {useMMKVObject} from 'react-native-mmkv';
import Share from 'react-native-share';
import {
  KEY_TYPE,
  StorageClientTypes,
  StorageProductTypes,
} from '../../application/libs/local-storage/storage';
import {ShareProductCatalogScreenProps} from '../../application/navigations/RootStackTypes';
import {useRoute} from '@react-navigation/native';

const useShareProductCatalog = () => {
  const route: ShareProductCatalogScreenProps['route'] = useRoute();

  const ref = useRef<any>(null);
  const [clients, setClients] = useMMKVObject<StorageClientTypes[]>(
    KEY_TYPE.CLIENTS,
  );
  const [products, setProducts] = useMMKVObject<StorageProductTypes[]>(
    KEY_TYPE.PRODUCTS,
  );

  const [selectedClient, setSelectedClient] =
    useState<StorageClientTypes | null>(route.params?.client ?? null);

  const [columns, setColumns] = useState<1 | 3>(1);

  const onShare = useCallback(() => {
    ref.current.capture().then((uri: any) => {
      Share.open({
        title: 'Katalog',
        url: uri,
      });
    });
  }, []);

  return {
    ref,
    columns,
    setColumns,
    onShare,
    clients,
    products,
    selectedClient,
    setSelectedClient,
  };
};

export default useShareProductCatalog;
