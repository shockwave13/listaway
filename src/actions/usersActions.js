export const SET_TOKEN = 'SET_TOKEN';
export const SET_LOADING = 'SET_STATUS';
export const SET_ERROR = 'SET_ERROR';

const DEFAULT_URL = 'http://127.0.0.1:8000/';

const setToken = token => ({
  type: SET_TOKEN,
  payload: token,
});

const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading,
});

const setError = error => ({
  type: SET_ERROR,
  payload: error,
});

export const clearError = () => dispatch => {
  dispatch(setError(null));
};

export const loginWithEmail = (e, p) => dispatch => {
  dispatch(setLoading(true));

  fetch(`${DEFAULT_URL}api/v1/login/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: e,
      password: p,
    }),
  })
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.key !== undefined) {
        dispatch(setToken(responseJson.key));
        dispatch(setLoading(false));
      } else {
        dispatch(setError(responseJson));
        dispatch(setLoading(false));
      }
    })
    .catch(error => dispatch(setError(error)));
};

export const loginWithFacebook = token => dispatch => {
  dispatch(setLoading(true));

  fetch(`${DEFAULT_URL}api/v1/facebook/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      access_token: token,
    }),
  })
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.key !== undefined) {
        dispatch(setToken(responseJson.key));
        dispatch(setLoading(false));
      } else {
        dispatch(setError(responseJson));
        dispatch(setLoading(false));
      }
    })
    .catch(error => dispatch(setError(error)));
};

export const loginWithGoogle = token => dispatch => {
  dispatch(setLoading(true));

  fetch(`${DEFAULT_URL}api/v1/google/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      access_token: token,
    }),
  })
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.key !== undefined) {
        dispatch(setToken(responseJson.key));
        dispatch(setLoading(false));
      } else {
        dispatch(setError(responseJson));
        dispatch(setLoading(false));
      }
    })
    .catch(error => dispatch(setError(error)));
};
