import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {SplashScreenProps} from '../../application/navigations/RootStackTypes';
import {storageCheckVerison} from '../../application/libs/local-storage/storage';
import {Alert, BackHandler} from 'react-native';

const useSplash = () => {
  const navigation: SplashScreenProps['navigation'] = useNavigation();

  useEffect(() => {
    const init = async () => {
      const response = await storageCheckVerison();

      if (response == null || response?.allow != '1') {
        Alert.alert(
          'New app version available!',
          'Your app version needs to be updated',
          [
            {
              onPress: () => BackHandler.exitApp(),
            },
          ],
        );

        return;
      }

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
