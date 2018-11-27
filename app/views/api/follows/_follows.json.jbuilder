follows.each do |follow|
  json.all_follows do
    json.set! follow.id do
      json.id follow.id
      json.follower_username follow.username
      json.followed_channel follow.followed_channel, :id, :name, :pic_url
    end
  end

  json.followed_channel_ids do
    json.set! follow.id, follow.followed_channel.id
  end
end 
