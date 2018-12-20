import { connect } from 'react-redux';
import FollowIndex from './follow_index';
import { requestFollows, deleteFollow } from '../../actions/follow_actions';
import { requestAllChannels } from '../../actions/channel_actions';

const mapStateToProps = state => ({
  follows: Object.values(state.entities.follows),
  currentUser: state.entities.users,
  channels: Object.values(state.entities.channels)
});


const mapDispatchToProps = dispatch => {
  return {
  requestFollows: () => dispatch(requestFollows()),
  deleteFollow: (followId) => dispatch(deleteFollow(followId)),
  requestAllChannels: () => dispatch(requestAllChannels())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowIndex);
