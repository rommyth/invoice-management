import {UserModel} from '../../data/models/UserModel';

export interface UserRepository {
  getListUser: () => Promise<UserModel[]>;
}
