json.set! 'videos' do
  @video.each do |video|
    json.set! video.id do
      json.extract! video, :id, :title, :views, :uploader_id, :length, :created_at
      json.film_url url_for(video.film)
      json.thumbnail_image_url url_for(video.thumbnail_image)
    end
  end 
end
