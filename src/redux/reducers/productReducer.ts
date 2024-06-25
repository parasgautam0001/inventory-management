import { Product } from '../../types/types';
import { ProductActionTypes, SET_PRODUCTS } from '../actions/types';

export interface ProductState {
  products: Array<Product>;
}

const initialState: ProductState = {
  products: [],
};

const productReducer = (state = initialState, action: ProductActionTypes): ProductState => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};

export default productReducer;
