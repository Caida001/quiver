import { connect } from 'react-redux';
import { requestSingleChannel } from '../../actions/channel_actions';
import { requestFollows, addFollow, deleteFollow } from '../../actions/follow_actions';

import { withRouter } from 'react-router-dom';
import ChannelShow from './channel_show';

const mapStateToProps = (state, { match }) => {

  return {
    channel: state.entities.channels[match.params.channelId],
    currentUser: state.entities.users,
    followedChannelIds: Object.values(state.entities.follows).map(el => el['followed_channel_id']),
    follows: Object.values(state.entities.follows)

  };
};

const mapDispatchToProps = dispatch => {

  return{
    requestSingleChannel: channelId => dispatch(requestSingleChannel(channelId)),
    requestFollows: () => dispatch(requestFollows()),
    addFollow: follow => dispatch(addFollow(follow)),
    deleteFollow: followId => dispatch(deleteFollow(followId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelShow))
