class ChatRoom < ApplicationRecord
  has_many :chatroom_users, dependent: :destroy
  has_many :messages, dependent: :destroy
  belongs_to :channel

end
