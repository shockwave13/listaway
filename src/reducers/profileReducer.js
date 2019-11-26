import {
  SET_ERROR,
  SET_LOADING,
  SET_PROFILE,
  ON_CHANGE_VALUE,
} from '../actions/profileActions';

const initState = {
  profile: [],
  error: null,
  isLoading: true,
};

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        isLoading: action.status,
      };
    }
    case ON_CHANGE_VALUE: {
      return {
        ...state,
        profile: {
          ...state.profile,
          [action.name]: action.value,
        },
      };
    }
    default:
      return state;
  }
};

export default profileReducer;
