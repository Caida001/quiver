channels.each do |channel|
  json.set! channel.id do
    json.id channel.id
    json.name channel.name
    json.owner_id channel.owner_id
    json.pic_url channel.pic_url
  end
end 
