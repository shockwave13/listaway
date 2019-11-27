import {DEFAULT_URL} from '../config/server';

export const SET_PROFILE = 'SET_PROFILE';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING = 'SET_LOADING';
export const CHANGE_PROFILE_FIELD = 'CHANGE_PROFILE_FIELD';

const setProfile = profile => ({
  type: SET_PROFILE,
  payload: profile,
});

const setError = error => ({
  type: SET_ERROR,
  payload: error,
});

const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading,
});

export const onChangeProfileInfo = (name, value) => ({
  type: CHANGE_PROFILE_FIELD,
  name,
  value,
});

export const getProfile = token => dispatch => {
  dispatch(setLoading(true));

  fetch(`${DEFAULT_URL}/api/v1/profile/`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setProfile(responseJson));
      dispatch(setLoading(false));
    })
    .catch(error => {
      dispatch(setError(error));
      dispatch(setLoading(false));
    });
};

export const updateProfile = (newProfile, token) => dispatch => {
  const profile = new FormData();
  profile.append('full_name', newProfile.full_name);
  profile.append('direct_tel', newProfile.direct_tel);
  profile.append('title', newProfile.title);
  profile.append('website', newProfile.website);
  profile.append('job_title', newProfile.job_title);
  profile.append('office_tel', newProfile.office_tel);

  fetch(`${DEFAULT_URL}/api/v1/profile/`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
    body: profile,
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setProfile(responseJson));
      dispatch(setLoading(false));
    })
    .catch(error => {
      dispatch(setError(error));
      dispatch(setLoading(false));
    });
};

export const updateAvatar = (avatar, token) => dispatch => {
  dispatch(setLoading(true));
  const profile = new FormData();
  console.log(avatar);
  profile.append('avatar', {
    uri: avatar.uri,
    type: avatar.type,
    name: avatar.fileName,
    data: avatar.data,
  });

  fetch(`${DEFAULT_URL}/api/v1/profile/`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
    body: profile,
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setProfile(responseJson));
      dispatch(setLoading(false));
    })
    .catch(error => {
      dispatch(setError(error));
      dispatch(setLoading(false));
    });
};
