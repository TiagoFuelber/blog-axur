import { AUTHORS } from '../actionTypes';

export const getAuthors = () =>
  (dispatch, getState, container) => {
    container.getAuthors({
      onSuccess: (authors) => {
        dispatch({ type: AUTHORS.GET_AUTHORS, authors });
      },
      onError: (err) => {
        throw new Error(err);
      }
    });
  };
