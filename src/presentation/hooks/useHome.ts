import {useQuery} from '@tanstack/react-query';
import {getListUserUsecase} from '../../domain/usecases/user/getListUserUsecase';
import {ToastAndroid} from 'react-native';

const useHome = () => {
  const appName = 'Welcome To My App';

  const {data, isLoading} = useQuery({
    queryKey: ['users'],
    queryFn: () => getListUserUsecase(),
    throwOnError(error) {
      ToastAndroid.show(error.message, 2000);
      return false; // or false based on your logic
    },
  });

  return {appName, data, isLoading};
};

export default useHome;
