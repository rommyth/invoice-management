import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {SplashScreenProps} from '../../application/navigations/RootStackTypes';

const useSplash = () => {
  const navigation: SplashScreenProps['navigation'] = useNavigation();

  useEffect(() => {
    const init = async () => {
      const redirect = setTimeout(() => {
        navigation.navigate('Login');
      }, 2000);
      return () => clearTimeout(redirect);
    };

    init();
  }, [navigation]);

  return {};
};

export default useSplash;
