import { getAuthors } from '../../container';
import { AUTHORS } from '../actionTypes';

export const getAuthorsAction = dispatch =>
  async () => {
    const authors = await getAuthors();

    dispatch({ type: AUTHORS.GET_AUTHORS, authors });
  };
