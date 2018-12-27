import { connect } from 'react-redux';
import { requestSingleChannel } from '../../actions/channel_actions';
import { requestFollows, addFollow, deleteFollow } from '../../actions/follow_actions';

import { withRouter } from 'react-router-dom';
import ChannelShow from './channel_show';

const mapStateToProps = (state, { match }) => {
  debugger
  return {
    channel: state.entities.channels[match.params.channelId],
    currentUser: state.session.currentUser

  };
};

const mapDispatchToProps = dispatch => {

  return{
    requestSingleChannel: channelId => dispatch(requestSingleChannel(channelId)),
    requestFollows: () => dispatch(requestFollows()),
    createFollow: follow => dispatch(createFollow(follow)),
    deleteFollow: channelId => dispatch(deleteFollow(channelId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelShow))
