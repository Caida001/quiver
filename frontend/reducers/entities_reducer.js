import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import channelsReducer from './channels_reducer';
import followsReducer from './follows_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  channels: channelsReducer,
  follows: followsReducer
});

export default entitiesReducer;
