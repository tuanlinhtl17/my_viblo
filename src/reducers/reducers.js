import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'

import searchData from './searchData';

export default combineReducers({
  searchData,
  loadingBar: loadingBarReducer,
});
