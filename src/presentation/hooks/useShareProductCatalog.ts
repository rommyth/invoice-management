import {useCallback, useRef, useState} from 'react';
import {useMMKVObject, useMMKVString} from 'react-native-mmkv';
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
  const [userWhatsapp, setUserWhatsapp] = useMMKVString(KEY_TYPE.USER_WHATSAPP);
  const [userTiktok, setUserTiktok] = useMMKVString(KEY_TYPE.USER_TIKTOK);

  const [selectedClient, setSelectedClient] =
    useState<StorageClientTypes | null>(route.params?.client ?? null);

  const [columns, setColumns] = useState<1 | 3>(1);

  const onShare = useCallback(() => {
    ref.current.capture().then((uri: any) => {
      Share.open({
        title: 'Share Katalog',
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
    userWhatsapp,
    setUserWhatsapp,
    userTiktok,
    setUserTiktok,
  };
};

export default useShareProductCatalog;
