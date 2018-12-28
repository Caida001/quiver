@channels.each do |channel|
  json.set! channel.id do
    json.extract! channel, :id, :name, :category, :owner, :pic_url, :vid_url, :cate
  end
end 
