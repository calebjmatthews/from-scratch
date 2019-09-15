import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store';
const store = configureStore();
import App from './containers/app';

import './styles/root.css';
import './styles/card.css';
import './styles/kitchen.css';

// @ts-ignore
const createStoreWithMiddleware = applyMiddleware(createStore);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);
