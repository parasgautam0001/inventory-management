import { combineReducers } from 'redux';
import adminReducer, { AdminState} from './adminReducer';
import productReducer, { ProductState } from './productReducer';

export interface RootState {
  admin: AdminState;
  products: ProductState;
}

export const rootReducer = combineReducers({
  admin: adminReducer,
  products: productReducer
});

export default rootReducer;
