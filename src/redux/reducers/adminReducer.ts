import { SET_ADMIN_STATUS, AdminActionTypes } from '../actions/types';

export interface AdminState {
  isAdmin: boolean;
}

const initialState: AdminState = {
  isAdmin: false,
};

const adminReducer = (state = initialState, action: AdminActionTypes): AdminState => {
  switch (action.type) {
    case SET_ADMIN_STATUS:
      return {
        ...state,
        isAdmin: action.isAdmin,
      };
    default:
      return state;
  }
};

export default adminReducer;
