import { 
  REQUEST_POSTS_USERS_ON_FAILED,
  REQUEST_POSTS_USERS_ON_SUCCESS,
  REQUEST_POSTS_USERS_ON_PENDING 
} from '../constants';

const initialState = {
  posts_pending: false,
  users: [],
  posts: [],
  error: ''
}

const requestPostsUsers = (state = initialState, action = {}) => {
  switch(action.type) {
    case REQUEST_POSTS_USERS_ON_PENDING:
      return { ...state, posts_pending: true }
    case REQUEST_POSTS_USERS_ON_SUCCESS:
      return { ...state, posts_pending: false, posts: action.payload.posts, users: action.payload.users }
    case REQUEST_POSTS_USERS_ON_FAILED:
      return { ...state, posts_pending: false, error: action.payload }
    default:
      return state
  }
}

export default requestPostsUsers;
