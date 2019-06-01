import { getPublications } from '../../container';
import { PUBLICATIONS } from '../actionTypes';
import { showLoader, hideLoader } from '../loader/actionCreators';

export const getPublicationsAction = dispatch =>
  async () => {
    dispatch(showLoader());
    const publications = await getPublications();

    dispatch({ type: PUBLICATIONS.GET_PUBLICATIONS, publications });
    dispatch(hideLoader());
  };

export const changeOrderAction = dispatch =>
  order =>
    dispatch({ type: PUBLICATIONS.CHANGE_ORDER, order });
