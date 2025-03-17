import {useNavigation} from '@react-navigation/native';
import {LoginScreenProps} from '../../application/navigations/RootStackTypes';
import {useForm} from 'react-hook-form';

const useLogin = () => {
  const navigation: LoginScreenProps['navigation'] = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(data => {
    // console.log(data);
    navigateToHome();
  });

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  return {control, errors, onSubmit};
};

export default useLogin;
