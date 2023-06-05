import { Image } from '@modules/images/schemas/image'

export type Seller = {
  id: number;
  name: string;
  identification?: string;
  observations?: string;
  status: 'active' | 'inactive';
};

export interface SellerWithPoints extends Seller {
  points: number;
  selectedImages: Image[];
}
