import React from 'react';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { store } from './state';
import Router from './Router';

library.add(faSearch);

const App = () =>
  (
    <Provider store={store}>
      <Router />
    </Provider>
  );

export default App;
