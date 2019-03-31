import { 
  REQUEST_POSTS_USERS_ON_FAILED,
  REQUEST_POSTS_USERS_ON_SUCCESS,
  REQUEST_POSTS_USERS_ON_PENDING 
} from '../constants';

export const requestPostsUsers = () => (dispatch) => {
  dispatch({ type: REQUEST_POSTS_USERS_ON_PENDING })
  Promise.all([
    fetch('https://my-viblo-api.herokuapp.com/api/v1/posts'),
    fetch('https://my-viblo-api.herokuapp.com/api/v1/users')
  ])
  .then(async([posts, users]) => {
    dispatch({ 
      type: REQUEST_POSTS_USERS_ON_SUCCESS, 
      payload: { 
        posts: await posts.json(), 
        users: await users.json() 
      } 
    })
  })
  .catch(error => dispatch({ type: REQUEST_POSTS_USERS_ON_FAILED, payload: error }))
};

// export const requestPostsUsers = () => (dispatch) => {
//   dispatch({ type: REQUEST_POSTS_USERS_ON_PENDING })
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(robots => dispatch({ type: REQUEST_POSTS_USERS_ON_SUCCESS, payload: robots }))
//   .catch(error => dispatch({ type: REQUEST_POSTS_USERS_ON_FAILED, payload: error }))
// }
