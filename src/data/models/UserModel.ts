export interface UserModel {
  id: string;
  name: string;
  email: string;
  address: AddressModel;
}

interface AddressModel {
  street: string;
  zipcode: string;
}
