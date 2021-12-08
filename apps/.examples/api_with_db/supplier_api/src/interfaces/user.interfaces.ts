export interface IUser {
  _key?: string;

  status: boolean;
  email: string;
  password: string;
  firstName: string;
  lastName: string;

  token?: string,
  refreshToken?: string
  lastLogin?: Date
}
