json.extract! channel, :id, :name, :pic_url
json.owner_name channel.owner.username
json.follows channel.follows
json.followings channel.followings 
