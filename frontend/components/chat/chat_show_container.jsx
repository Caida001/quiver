import { connect } from 'react-redux';
import Chat from './chat';
import { receiveMessage, requestChatroom, addMessage } from '../../actions/chat_actions';
import { requestAllChannels } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, { match }) => {

  return {
    channel: state.entities.channels[match.params.channelId],
    currentUser: state.entities.users,
    messages: Object.values(state.entities.chats)
  }
}

const mapDispatchToProps = dispatch => ({
  receiveMessage: message => dispatch(receiveMessage(message)),
  requestChatroom: channelId => dispatch(requestChatroom(channelId)),
  requestAllChannels: () => dispatch(requestAllChannels()),
  addMessage: message => dispatch(addMessage(message))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Chat));
