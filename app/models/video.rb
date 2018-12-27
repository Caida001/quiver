class Video < ApplicationRecord
  validates :title, :description, :video_url, :thumbnail_url, :uploader_id, :channel_id, presence: true

  belongs_to :user,
    foreign_key: :uploader_id,
    class_name: :User

  belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel


end
