import { Seller } from '@modules/sellers/schemas/seller'

export interface Invoice {
  id: number;
  date: string;
  dueDate: string;
  observations: string;
  anotation: string;
  termsConditions: string;
  status: string;
  client: Client;
  numberTemplate: NumberTemplate[];
  retentions: Retention[];
  currency: Currency;
  seller: Seller;
  priceList: PriceList;
  total: number;
  totalPaid: number;
  balance: number;
  decimalPrecision: number;
  items: Item[];
  costCenter: CostCenter;
}

export interface Client {
  id: number;
  name: string;
  identification: string;
  email: string;
  phonePrimary: string;
  phoneSecondary: string;
  fax: string;
  mobile: string;
  observations: string;
  address: Address;
}

export interface Address {
  address: string;
  city: string;
}

export interface NumberTemplate {
  id: number;
  prefix: string;
  number: number;
  text: string;
}

export interface Retention {
  id: number;
  name: string;
  percentage: number;
  amount: number;
}

export interface Currency {
  code: string;
  symbol: string;
  exchangeRate: number;
}

export interface PriceList {}

export interface Item {
  id: number;
  name: string;
  description: string;
  reference: string;
  tax: Tax[];
  price: number;
  quantity: number;
}

export interface Tax {
  id: number;
  name: string;
  percentage: number;
  description: string;
  type: string;
  status: string;
}

export interface CostCenter {
  id: string;
  code: string;
  name: string;
  description: string;
  status: string;
}
