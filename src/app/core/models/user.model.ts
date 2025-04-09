import { Role } from './enums/roles.enum';

export interface User {
  id: number;
  username: string;
  email: string;
  roles: Role[];
}
