import { Company, Tariff, User, UserRole } from '../types';

export const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'ABC Energy Corp',
    companyId: 'ABC001',
    email: 'contact@abcenergy.com',
    contact: 'John Smith',
    address: '123 Energy Street',
    city: 'Houston',
    state: 'TX',
    zipCode: '77001',
    phone: '(713) 555-0101',
    fax: '(713) 555-0102',
    usersCount: 15,
    tariffsCount: 8
  },
  {
    id: '2',
    name: 'XYZ Power Solutions',
    companyId: 'XYZ002',
    email: 'info@xyzpower.com',
    contact: 'Sarah Johnson',
    address: '456 Power Avenue',
    city: 'Dallas',
    state: 'TX',
    zipCode: '75201',
    phone: '(214) 555-0201',
    fax: '(214) 555-0202',
    usersCount: 12,
    tariffsCount: 6
  },
  {
    id: '3',
    name: 'Delta Utilities Inc',
    companyId: 'DEL003',
    email: 'support@deltautilities.com',
    contact: 'Mike Wilson',
    address: '789 Utility Blvd',
    city: 'Austin',
    state: 'TX',
    zipCode: '73301',
    phone: '(512) 555-0301',
    fax: '(512) 555-0302',
    usersCount: 20,
    tariffsCount: 12
  }
];

export const mockTariffs: Tariff[] = [
  {
    id: '1',
    file: 'tariff_001.pdf',
    tariffId: 'TAR001',
    sectionId: 'SEC001',
    fId: 'F001',
    fercId: 'FERC001',
    companyId: '1'
  },
  {
    id: '2',
    file: 'tariff_002.pdf',
    tariffId: 'TAR002',
    sectionId: 'SEC002',
    fId: 'F002',
    fercId: 'FERC002',
    companyId: '1'
  },
  {
    id: '3',
    file: 'tariff_003.pdf',
    tariffId: 'TAR003',
    sectionId: 'SEC003',
    fId: 'F003',
    fercId: 'FERC003',
    companyId: '2'
  },
  {
    id: '4',
    file: 'tariff_004.pdf',
    tariffId: 'TAR004',
    sectionId: 'SEC004',
    fId: 'F004',
    fercId: 'FERC004',
    companyId: '3'
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    username: 'jsmith',
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@abcenergy.com',
    mobilePhone: '(713) 555-0103',
    workPhone: '(713) 555-0101',
    accountRole: UserRole.ACCOUNT_ADMIN,
    companyId: '1'
  },
  {
    id: '2',
    username: 'sjohnson',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@xyzpower.com',
    mobilePhone: '(214) 555-0203',
    workPhone: '(214) 555-0201',
    accountRole: UserRole.SITE_ADMIN,
    companyId: '2'
  },
  {
    id: '3',
    username: 'mwilson',
    firstName: 'Mike',
    lastName: 'Wilson',
    email: 'mike.wilson@deltautilities.com',
    mobilePhone: '(512) 555-0303',
    workPhone: '(512) 555-0301',
    accountRole: UserRole.TARIFF_ADMIN,
    companyId: '3'
  },
  {
    id: '4',
    username: 'admin',
    firstName: 'System',
    lastName: 'Administrator',
    email: 'admin@venustariff.com',
    mobilePhone: '(555) 555-0001',
    workPhone: '(555) 555-0000',
    accountRole: UserRole.SITE_ADMIN,
    companyId: '1'
  }
];
