import { StatusType } from './status';

export type AccountType = {
  email: string;
  family_name: string;
  given_name: string;
  id: string;
  locale: string;
  name: string;
  picture: string;
  verified_email: boolean;
};

export type AccountState = {
  account: AccountType | null;
  status: StatusType;
  error: string | null;
};
