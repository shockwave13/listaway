import {
  SET_KEY_EMAIL_AUTH,
  SET_KEY_FACEBOOK_AUTH,
  SET_KEY_GOOGLE_AUTH,
} from '../actions/usersActions';

const initState = {
  keyEmail: '',
  keyFacebook: '',
  keyGoogle: '',
  authStatus: false,
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_KEY_EMAIL_AUTH: {
      return {
        ...state,
        keyEmail: action.key,
        authStatus: true,
      };
    }
    case SET_KEY_FACEBOOK_AUTH: {
      return {
        ...state,
        keyFacebook: action.key,
        authStatus: true,
      };
    }
    case SET_KEY_GOOGLE_AUTH: {
      return {
        ...state,
        keyGoogle: action.key,
        authStatus: true,
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
