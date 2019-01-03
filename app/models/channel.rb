class Channel < ApplicationRecord

  after_create :ensure_chatroom

  has_one :chatroom,
    class_name: :Chatroom,
    primary_key: :id,
    foreign_key: :channel_id,
    dependent: :destroy

  has_many :follows,
    class_name: :Follow,
    foreign_key: :followed_channel_id,
    dependent: :destroy

  has_many :followers,
    source: :follower,
    through: :follows

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

  belongs_to :category, optional: true


  def self.top_five_results(query_params)
    param = '%' + query_params.downcase + '%'
    Channel.where('lower(name) LIKE ?', param).limit(5)
  end

  def ensure_chatroom
    self.chatroom ||= Chatroom.create!(channel_id: self.id)
  end
end
