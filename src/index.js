import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faCaretUp, faEye } from '@fortawesome/free-solid-svg-icons';

import reducers from './reducers/reducers';

library.add(faSearch, faCaretUp, faEye);

const store = createStore(
  reducers,
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
