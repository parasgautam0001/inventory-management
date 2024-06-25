import { Product } from "../../types/types";

export const SET_ADMIN_STATUS = 'SET_ADMIN_STATUS';

export const SET_PRODUCTS = 'SET_PRODUCTS';

export type AdminActionTypes = {
  type: typeof SET_ADMIN_STATUS;
  isAdmin: boolean;
};

export type ProductActionTypes = {
  type: typeof SET_PRODUCTS;
  products: Array<Product>;
};
