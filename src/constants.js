export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';

export const REQUEST_POSTS_USERS_ON_PENDING = 'REQUEST_POSTS_USERS_ON_PENDING';
export const REQUEST_POSTS_USERS_ON_SUCCESS = 'REQUEST_POSTS_USERS_ON_SUCCESS';
export const REQUEST_POSTS_USERS_ON_FAILED = 'REQUEST_POSTS_USERS_ON_FAILED';

export const DESTROY_POSTS_ON_FAILED = 'DESTROY_POSTS_ON_FAILED';
export const DESTROY_POSTS_ON_SUCCESS = 'DESTROY_POSTS_ON_SUCCESS';
export const DESTROY_POSTS_ON_PENDING = 'DESTROY_POSTS_ON_PENDING';

export const LOAD_COMMENTS_DATA = 'LOAD_COMMENTS_DATA';
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_FAIL = 'CREATE_COMMENT_FAIL';

export const WS_URL = 'wss://my-viblo-api.herokuapp.com/cable';

export const LOADING_BAR_PROMISE_TYPE = [
  REQUEST_POSTS_USERS_ON_PENDING,
  REQUEST_POSTS_USERS_ON_SUCCESS,
  REQUEST_POSTS_USERS_ON_FAILED,

  DESTROY_POSTS_ON_PENDING,
  DESTROY_POSTS_ON_SUCCESS,
  DESTROY_POSTS_ON_FAILED,

  LOAD_COMMENTS_DATA,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAIL
]

export const BLANK_AVATAR_URL = 'https://zcoin.io/wp-content/uploads/2017/01/blank-avatar-300x300.png'
