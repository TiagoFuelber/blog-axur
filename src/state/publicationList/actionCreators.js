import { PUBLICATIONS } from '../actionTypes';
import { showLoader, hideLoader } from '../loader/actionCreators';

export const getPublications = () =>
  async (dispatch, getState, container) => {
    dispatch(showLoader());
    container.getPublications({
      onSuccess: (publications) => {
        dispatch({ type: PUBLICATIONS.GET_PUBLICATIONS, publications });
        dispatch(hideLoader());
      },
      onError: (err) => {
        dispatch(hideLoader());
        throw new Error(err);
      }
    });
  };

export const changeOrder = order =>
  dispatch =>
    dispatch({ type: PUBLICATIONS.CHANGE_ORDER, order });
