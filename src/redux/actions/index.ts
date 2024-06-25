import { Product } from '../../types/types';
import { SET_ADMIN_STATUS, AdminActionTypes, SET_PRODUCTS, ProductActionTypes } from './types';

export const setAdminStatus = (isAdmin: boolean): AdminActionTypes => ({
  type: SET_ADMIN_STATUS,
  isAdmin,
});

export const setProducts = (products: Array<Product>): ProductActionTypes => ({
  type: SET_PRODUCTS,
  products,
});
