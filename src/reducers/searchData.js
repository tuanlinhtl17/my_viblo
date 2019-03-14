import { CHANGE_SEARCH_FIELD } from '../constants';

const initialState = {
  searchField: '',
};

const searchData = (state = initialState, action = {}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
}

export default searchData;
