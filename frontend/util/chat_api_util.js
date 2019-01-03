export const fetchChatroom = channelId => (
  $.ajax({
    type: 'GET',
    url: `api/chatrooms/${channelId}`
  })
)

export const createMessage = message => (
  $.ajax({
    type: 'POST',
    url: `api/chatrooms/${message.chatroom_id}/messages`,
    data: {message}
  })
)
