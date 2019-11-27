import {AsyncStorage} from 'react-native';

import {SET_TOKEN, SET_LOADING, SET_ERROR} from '../actions/usersActions';

const initState = {
  token: null,
  loading: false,
  error: null,
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      AsyncStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
