import {UserModel} from '../models/UserModel';
import {UserRepository} from '../../domain/repository/UserReposistory';
import {Api} from '../api/Api';

import Axios from '../api/Axios.instance';

export const UserRepositoryImpl: UserRepository = {
  getListUser: async function (): Promise<UserModel[]> {
    try {
      const result = await Axios.get(Api.users());
      return result.data;
    } catch (e) {
      throw new Error('Failied to fetch Users');
    }
  },
};
