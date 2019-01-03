import * as APIUtil from '../util/chat_api_util';

export const RECEIVE_CHATROOM = 'RECEIVE_CHATROOM';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const receiveChatroom = chatroom => ({
  type: RECEIVE_CHATROOM,
  chatroom
});

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
})

export const requestChatroom = channelId => dispatch => (
  APIUtil.fetchChatroom(channelId).then(chatroom => dispatch(receiveChatroom(chatroom)))
)

export const addMessage = message => dispatch => (
  APIUtil.createMessage(message)
)
