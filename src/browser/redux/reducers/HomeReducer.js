import {
  GET_DATA_ERROR,
  GET_DATA_SUCCESS
} from '../actions/HomeAction';

const initalState = {
  users: [],
};

const HomeReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return {
        ...state,
        users: action.data
      }
    case GET_DATA_ERROR:
      return {
        ...state
      }
    default:
      return state;
  }
};

export default HomeReducer;
