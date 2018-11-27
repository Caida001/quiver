import * as APIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOWS = "RECEIVE_FOLLOWS";
export const CREATE_FOLLOW = "CREATE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const receiveFollows = follows => ({
  type: RECEIVE_FOLLOWS,
  follows
});

export const createFollow = follow => ({
  type: CREATE_FOLLOW,
  follow
});

export const removeFollow = followId => ({
  type: REMOVE_FOLLOW,
  followId
});

export const requestFollows = () => dispatch => (
  APIUtil.fetchAllFollows().then(follows => dispatch(receiveFollows(follows)))
);

export const addFollow = follow => dispatch => (
  APIUtil.createFollow(follow).then(response => dispatch(createFollow(response)))
);

export const deleteFollow = channelId => dispatch => (
  APIUtil.destroyFollow(channelId).then(response => dispatch(removeFollow(response)))
);
