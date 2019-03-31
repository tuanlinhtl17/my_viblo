import { 
  LOAD_COMMENTS_DATA,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAIL,
} from '../constants';

const initialState = {
  comments: [],
  error: ''
}

const requestComments = (state = initialState, action = {}) => {
  switch(action.type) {
    case LOAD_COMMENTS_DATA:
      return { ...state, comments: JSON.parse(action.payload) }
    case CREATE_COMMENT_SUCCESS:
      return { 
        ...state, 
        comments: state.comments.concat(JSON.parse(action.payload)) 
      }
    case CREATE_COMMENT_FAIL:
      return { ...state, error: action.payload }
    default:
      return state
  }
}

export default requestComments;
