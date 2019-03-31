import { 
  DESTROY_POSTS_ON_FAILED,
  DESTROY_POSTS_ON_SUCCESS,
  DESTROY_POSTS_ON_PENDING 
} from '../constants';

const requestOptions = {
  method: 'DELETE'
};

export const destroyPost = (postID) => (dispatch) => {
  dispatch({ type: DESTROY_POSTS_ON_PENDING })
  fetch('https://my-viblo-api.herokuapp.com/api/v1/posts/' + postID, requestOptions)
    .then(response => response.json())
    .then(posts => dispatch({ type: DESTROY_POSTS_ON_SUCCESS, payload: posts }))
    .catch(error => dispatch({ type: DESTROY_POSTS_ON_FAILED, payload: error }))
};
