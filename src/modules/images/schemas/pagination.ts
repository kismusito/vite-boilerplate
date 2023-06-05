import { Image } from './image'

export type Pagination = {
  total: number;
  total_pages: number;
  results: Image[];
};
