import {useQuery} from '@tanstack/react-query';
import {getListUserUsecase} from '../../domain/usecases/user/getListUserUsecase';

const useHome = () => {
  // const {data, isLoading} = useQuery({
  //   queryKey: ['users'],
  //   queryFn: () => getListUserUsecase(),
  //   throwOnError(error) {
  //     ToastAndroid.show(error.message, 2000);
  //     return false; // or false based on your logic
  //   },
  // });

  const navigateToCreateInvoice = () => {
    console.log('Navigate to Create Invoice');
  };

  return {navigateToCreateInvoice};
};

export default useHome;
