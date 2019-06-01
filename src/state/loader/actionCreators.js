import { LOADER } from '../actionTypes';

export const showLoader = () =>
  ({ type: LOADER.SHOW_LOADER });

export const hideLoader = () =>
  ({ type: LOADER.HIDE_LOADER });
