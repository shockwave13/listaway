import {
  SET_ERROR,
  SET_LOADING,
  SET_PROFILE,
  CHANGE_PROFILE_FIELD,
} from '../actions/profileActions';

const initState = {
  profile: [],
  error: null,
  loading: true,
};

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PROFILE: {
      return {
        ...state,
        profile: action.payload,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case CHANGE_PROFILE_FIELD: {
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
