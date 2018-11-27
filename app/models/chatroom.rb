class Chatroom < ApplicationRecord
  validates :channel, presence: true

  has_many :messages, dependent: :destroy
  belongs_to :channel

end
