import { LOADER } from '../actionTypes';

export const loaderReducer = (state = false, action) => {
  switch (action.type) {
    case LOADER.SHOW_LOADER:
      return true;

    case LOADER.HIDE_LOADER:
      return false;

    default:
      return state;
  }
};
