channels.each do |channel|
  json.set! channel.id do
    json.id channel.id
    json.name channel.name
    json.category channel.category
    json.owner channel.owner
    json.pic_url channel.pic_url
    json.cate channel.cate
  end
end
