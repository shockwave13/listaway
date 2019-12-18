import {AsyncStorage} from 'react-native';

import {
  SET_TOKEN,
  SET_LOADING,
  SET_ERROR,
  CLEAR_USER,
  SET_USER,
} from '../actions/usersActions';

const initState = {
  user: null,
  userStatus: false,
  token: null,
  loading: false,
  error: null,
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER: {
      AsyncStorage.setItem('user', action.payload);
      return {
        ...state,
        user: action.payload,
        userStatus: true,
      };
    }
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
    case CLEAR_USER: {
      return {
        ...state,
        user: null,
        userStatus: false,
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
