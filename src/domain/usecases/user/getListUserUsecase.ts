import {UserRepositoryImpl} from '../../../data/repository/UserRepositoryImpl';

export const getListUserUsecase = async () => {
  return await UserRepositoryImpl.getListUser();
};
