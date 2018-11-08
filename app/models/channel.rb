class Channel < ApplicationRecord
  has_one :chatroom,
    class_name: :ChatRoom,
    foreign_key: :channel_id

  has_many :my_subscriptions,
    class_name: :Subscription,
    foreign_key: :channel_id

  has_many :videos,
    foreign_key: :channel_id,
    class_name: :Video

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User 
end
