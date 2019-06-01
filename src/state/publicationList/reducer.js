import { PUBLICATIONS } from '../actionTypes';

const initialState = {
  publications: [],
  orderByDate: 'desc',
  searchAuthorQuery: ''
};

export const publicationListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUBLICATIONS.GET_PUBLICATIONS:
      return { ...state, publications: action.publications };

    case PUBLICATIONS.CHANGE_ORDER:
      return { ...state, orderByDate: action.order };

    case PUBLICATIONS.CHANGE_AUTHOR_QUERY:
      return { ...state, searchAuthorQuery: action.searchAuthorQuery };

    default:
      return state;
  }
};
