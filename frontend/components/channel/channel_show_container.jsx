import { connect } from 'react-redux';
import { requestSingleChannel } from '../../actions/channel_actions';
import { requestFollows, addFollow, deleteFollow } from '../../actions/channel_actions';
import { selectFollowIds } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';
import ChannelShow from './channel_show';

const mapStateToProps = state => ({
  channel: state.channels.
})
