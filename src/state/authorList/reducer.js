import { AUTHORS } from '../actionTypes';

const initialState = {
  authors: []
};

export const authorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORS.GET_AUTHORS:
      return { ...state, authors: action.authors };

    default:
      return state;
  }
};
