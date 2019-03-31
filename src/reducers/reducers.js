import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

import searchData from './searchData';
import requestPostsUsers from './requestPostsUsers';
import requestComments from './requestComments';

export default combineReducers({
  loadingBar: loadingBarReducer,
  searchData,
  requestPostsUsers,
  requestComments,
});
