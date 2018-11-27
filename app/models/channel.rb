class Channel < ApplicationRecord

  has_one :chatroom,
    class_name: :Chatroom,
    foreign_key: :channel_id,
    dependent: :destroy

  has_many :follows,
    class_name: :Follow,
    foreign_key: :followed_channel_id,
    dependent: :destroy

  has_many :followers,
    source: :follower,
    through: :follows

  has_many :videos,
    foreign_key: :channel_id,
    class_name: :Video

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

  def self.top_five_results(query_params)
    param = '%' + query_params.downcase + '%'
    Channel.where('lower(name) LIKE ?', param).limit(5)
  end
end
