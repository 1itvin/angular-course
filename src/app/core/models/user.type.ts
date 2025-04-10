import { Role } from './role.type';

export type UserResponse = {
  id: string;
  username: string;
  email: string;
  roles: string[];
};

export type User = Omit<UserResponse, 'roles'> & { roles: Role[] };
