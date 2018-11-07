class Subscription < ApplicationRecord
  validates :subscriber, :user, presence: true

  belongs_to :subscriber,
    class_name: :User,
    primary_key: :id,
    foreign_key: :subscriber_id

  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id
end
