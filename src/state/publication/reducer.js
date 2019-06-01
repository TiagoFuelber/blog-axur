import { PUBLICATION } from '../actionTypes';

const initialState = {
  publication: null,
  authorName: null
};

export const publicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUBLICATION.GET_PUBLICATION:
      return { ...state, publication: action.publication };

    case PUBLICATION.GET_AUTHOR_NAME:
      return { ...state, authorName: action.authorName };

    case PUBLICATION.CLEAR_PUBLICATION:
      return { ...initialState };

    default:
      return state;
  }
};
