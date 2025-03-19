import React, {useEffect, useState} from 'react';
import {DetailClientScreenProps} from '../../application/navigations/RootStackTypes';
import {useNavigation, useRoute} from '@react-navigation/native';
import {BackHandler, ToastAndroid} from 'react-native';
import {
  StorageClientTypes,
  storageDeleteClient,
  storageUpdateClient,
} from '../../application/libs/local-storage/storage';

const useDetailClient = () => {
  const navigation: DetailClientScreenProps['navigation'] = useNavigation();
  const route: DetailClientScreenProps['route'] = useRoute();

  const [isEditMode, setIsEditMode] = useState(false);
  const [client, setClient] = useState<StorageClientTypes>(route.params.item);

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

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const onDeleteClient = () => {
    storageDeleteClient(client.client_id);
    navigation.goBack();
  };

  const onSubmitUpdate = () => {
    storageUpdateClient(client);
    toggleEditMode();
    ToastAndroid.show('Success Update', 2000);
  };

  return {
    client,
    setClient,
    isEditMode,
    toggleEditMode,
    onDeleteClient,
    onSubmitUpdate,
  };
};

export default useDetailClient;
