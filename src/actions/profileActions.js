const DEFAULT_PROFILE_URL =
  'https://pacific-atoll-30835.herokuapp.com/api/v1/profiles/';

export const SET_PROFILE = 'SET_PROFILE';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING = 'SET_LOADING';
export const ON_CHANGE_VALUE = 'ON_CHANGE_VALUE';

const setProfile = profile => ({
  type: SET_PROFILE,
  profile,
});

const getProfileError = error => ({
  type: SET_ERROR,
  error,
});

const setLoading = status => ({
  type: SET_LOADING,
  status,
});

export const onChangeProfileInfo = (name, value) => ({
  type: ON_CHANGE_VALUE,
  name,
  value,
});

export const getProfile = profileId => dispatch => {
  dispatch(setLoading(true));

  fetch(`${DEFAULT_PROFILE_URL}${profileId}/`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setProfile(responseJson));
      dispatch(setLoading(false));
    })
    .catch(error => dispatch(getProfileError(error)));
};

export const updateProfile = newProfile => dispatch => {
  const profile = new FormData();
  profile.append('family_name', newProfile.family_name);
  profile.append('direct_tel', newProfile.direct_tel);
  profile.append('title', newProfile.title);
  profile.append('website', newProfile.website);
  profile.append('brokerage_name', newProfile.brokerage_name);
  profile.append('office_tel', newProfile.office_tel);

  /**
  profile.append('image', {
    uri: this.state.avatarSource.uri,
    type: this.state.avatarSource.type,
    name: this.state.avatarSource.fileName,
    data: this.state.avatarSource.data,
  });
   **/
  fetch('https://pacific-atoll-30835.herokuapp.com/api/v1/profiles/1/', {
    method: 'PUT',
    body: profile,
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setProfile(responseJson));
    })
    .catch(error => {
      dispatch(setProfileError(error));
    });
};
