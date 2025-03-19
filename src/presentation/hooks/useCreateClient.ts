import {useNavigation} from '@react-navigation/native';
import {CreateClientScreenProps} from '../../application/navigations/RootStackTypes';

import {useState} from 'react';
import {KEY_TYPE} from '../../application/libs/local-storage/storage';
import {generateRandomString} from '../../application/utils/RandomString';
import {useMMKVObject} from 'react-native-mmkv';

const useCreateClient = () => {
  const navigation: CreateClientScreenProps['navigation'] = useNavigation();
  const [clients, setClients] = useMMKVObject<any[]>(KEY_TYPE.CLIENTS);

  const [form, setForm] = useState({
    client_id: generateRandomString(),
    client_company_name: '',
    client_pic_name: '',
    client_email: '',
    client_phone: '',
    client_address: '',
    client_fee: 0,
  });

  const onSubmit = () => {
    setClients(prev => [...(prev || []), form]);
    navigation.goBack();
  };

  return {onSubmit, form, setForm};
};

export default useCreateClient;
