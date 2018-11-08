class Subscription < ApplicationRecord
  validates :subscriber_id, :channel_id, presence: true

  belongs_to :subscriber,
    class_name: :User,
    primary_key: :id,
    foreign_key: :subscriber_id

  belongs_to :channel,
    class_name: :Channel,
    primary_key: :id,
    foreign_key: :channel_id
end
