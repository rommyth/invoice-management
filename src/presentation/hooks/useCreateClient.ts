import {useNavigation} from '@react-navigation/native';
import {CreateClientScreenProps} from '../../application/navigations/RootStackTypes';
import {useForm} from 'react-hook-form';
import {useState} from 'react';

const useCreateClient = () => {
  const navigation: CreateClientScreenProps['navigation'] = useNavigation();
  const [fee, setFee] = useState(0);

  const onSubmit = () => {
    navigation.goBack();
  };

  return {fee, setFee, onSubmit};
};

export default useCreateClient;
