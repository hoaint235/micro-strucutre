import { ICategoryProduct } from "./ICategoryProduct";

export interface IProduct {
  id: string;
  name: string;
  unit: string;
  vendor: string;
  category: ICategoryProduct;
  active?: boolean;
  description?: string;
}
