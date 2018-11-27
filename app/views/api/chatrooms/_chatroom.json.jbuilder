@chatroom.messages.each do |message|
  json.set! message.id do
    json.id message.id
    json.channel_id message.chatroom.channel.id
    json.username message.user.username
    json.body message.body
  end
end 
