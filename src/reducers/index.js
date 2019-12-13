import {combineReducers} from 'redux';

import usersReducer from './usersReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  profile: profileReducer,
});

export default rootReducer;
