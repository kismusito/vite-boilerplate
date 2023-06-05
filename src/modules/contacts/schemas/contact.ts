import { Seller } from '@modules/sellers/schemas/seller'

export interface Contact {
  id: number;
  name: string;
  identification: string;
  email: string;
  phonePrimary: string;
  phoneSecondary: string;
  fax: string;
  mobile: string;
  observations: string;
  type: string[];
  address: Address;
  seller: Seller;
  term: Term;
  priceList: PriceList;
  internalContacts: InternalContact[];
}

export interface Address {
  address: string;
  city: string;
}

export interface Term {
  id: number;
  name: string;
  days: number;
}

export interface PriceList {
  id: number;
  name: string;
}

export interface InternalContact {
  id: number;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  mobile: string;
  sendNotifications: string;
}
