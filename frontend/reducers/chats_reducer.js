import { RECEIVE_CHATROOM, RECEIVE_MESSAGE } from '../actions/chat_actions';


const chatsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CHATROOM:
      return action.chatroom
    case RECEIVE_MESSAGE:
      return action.message
    default:
      return state;
  }
}

export default chatsReducer;
