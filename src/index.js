import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { loadingBarMiddleware } from 'react-redux-loading-bar'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faCaretUp, faEye } from '@fortawesome/free-solid-svg-icons';

import reducers from './reducers/reducers';

import createConsumer from './actioncable/createConsumer';
import CommentsChannel from './actioncable/CommentSubscription';
import { receiveComments } from './actions/requestComments';
import { LOADING_BAR_PROMISE_TYPE } from './constants';

library.add(faSearch, faCaretUp, faEye);

const store = createStore(
  reducers,
  applyMiddleware(
    logger, 
    ReduxThunk, 
    loadingBarMiddleware({ promiseTypeSuffixes: LOADING_BAR_PROMISE_TYPE })
  )
);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, 
  document.getElementById('root')
);

/**** Action cable logic ***/
window.App = {};

createConsumer();
CommentsChannel.subscribe((data) => {
  if(data) {
    store.dispatch(receiveComments(data.message));
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
