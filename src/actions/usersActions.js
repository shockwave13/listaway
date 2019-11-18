export const SET_KEY_EMAIL_AUTH = 'SET_KEY_EMAIL_AUTH';
export const SET_KEY_GOOGLE_AUTH = 'SET_KEY_GOOGLE_AUTH';
export const SET_KEY_FACEBOOK_AUTH = 'SET_KEY_FACEBOOK_AUTH';

const setKeyEmailAuth = key => ({
  type: SET_KEY_EMAIL_AUTH,
  key,
});

const setKeyGoogleAuth = key => ({
  type: SET_KEY_GOOGLE_AUTH,
  key,
});

const setKeyFacebookAuth = key => ({
  type: SET_KEY_FACEBOOK_AUTH,
  key,
});

export const setAuthKey = (type, key) => dispatch => {
  switch (type) {
    case 'email': {
      dispatch(setKeyEmailAuth(key));
      break;
    }
    case 'facebook': {
      dispatch(setKeyFacebookAuth(key));
      break;
    }
    case 'google': {
      dispatch(setKeyGoogleAuth(key));
      break;
    }
    default:
      return null;
  }
};
