import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { publicationListReducer as publicationListStore } from './publicationList/reducer';
import { publicationReducer as publicationStore } from './publication/reducer';
import { authorsReducer as authorStore } from './authorList/reducer';
import { loaderReducer as showLoader } from './loader/reducer';
import * as container from '../container';

const reducers = combineReducers({
  publicationListStore,
  publicationStore,
  authorStore,
  showLoader
});

export const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware.withExtraArgument(container))
);
