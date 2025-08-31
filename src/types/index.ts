export interface Company {
  id: string;
  name: string;
  companyId: string;
  email: string;
  contact: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  fax: string;
  usersCount: number;
  tariffsCount: number;
}

export interface Tariff {
  id: string;
  file: string;
  tariffId: string;
  sectionId: string;
  fId: string;
  fercId: string;
  companyId: string;
}

export interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  mobilePhone: string;
  workPhone: string;
  accountRole: UserRole;
  companyId: string;
}

export enum UserRole {
  SITE_ADMIN = 'Site Admin',
  ACCOUNT_ADMIN = 'Account Admin',
  TARIFF_ADMIN = 'Tariff Admin',
  USER = 'User'
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}
