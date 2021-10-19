import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/css/style.css'

import { createStore } from 'redux';
import allReducer from './reducer'
import { Provider } from 'react-redux'

const store = createStore(
  allReducer
)

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();