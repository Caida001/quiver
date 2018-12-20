import { RECEIVE_ALL_CHANNELS, RECEIVE_SINGLE_CHANNEL, EDIT_CHANNEL, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/channel_actions';
import merge from 'lodash/merge';

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_CHANNELS:
      return action.channels;
    case RECEIVE_SINGLE_CHANNEL:
      return action.channel;
    case EDIT_CHANNEL:
      return action.channel;
    case RECEIVE_ERRORS:
      return Object.assign({}, state, { errors: action.errors });
    case CLEAR_ERRORS:
      return Object.assign({}, state, { errors: [] } );
    default:
      return state;
  }
};

export default channelsReducer;
