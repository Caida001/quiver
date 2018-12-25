follows.each do |follow|
  json.set! follow.id do
    json.id follow.id
    json.follower_id follow.follower_id
    json.followed_channel_id follow.followed_channel_id
    json.follower follow.follower
    json.followed_channel follow.followed_channel
  end

  json.followed_channel_ids do
    json.set! follow.id, follow.followed_channel.id 
  end

end
