import React from 'react';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch
  //   faTrash,
  //   faMinusSquare,
  //   faPlusSquare,
  //   faTimes,
  //   faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import { store } from './state';
import Router from './Router';

library.add(faSearch);
// library.add(faTrash);
// library.add(faMinusSquare);
// library.add(faPlusSquare);
// library.add(faTimes);
// library.add(faCheckCircle);

const App = () =>
  (
    <Provider store={store}>
      <Router />
    </Provider>
  );

export default App;
