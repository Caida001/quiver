class Message < ApplicationRecord
  validates :body, :user, :chatroom, presence: true
  validates :body, length: {maximum: 171}

  belongs_to :chatroom

  belongs_to :user

end
