json.set! channel.id do
  json.extract! channel, :id, :name, :pic_url, :cate, :vid_url, :owner, :videos, :followers, :follows, :chatroom
end 
