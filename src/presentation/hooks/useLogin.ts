import {useNavigation} from '@react-navigation/native';
import {LoginScreenProps} from '../../application/navigations/RootStackTypes';
import {useForm} from 'react-hook-form';
import {ToastAndroid} from 'react-native';

const useLogin = () => {
  const navigation: LoginScreenProps['navigation'] = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: 'adminsemesta@gmail.com',
      password: 'semesta123',
    },
  });

  const onSubmit = handleSubmit(data => {
    // console.log(data);
    const credential = {
      email: 'adminsemesta@gmail.com',
      password: 'semesta123',
    };

    // alert(data === credential);
    const checkAuth = JSON.stringify(data) === JSON.stringify(credential);

    if (checkAuth) {
      navigateToHome();
    } else {
      ToastAndroid.show('Email or password incorrect', 2000);
    }
  });

  const navigateToHome = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  };

  return {control, errors, onSubmit};
};

export default useLogin;
