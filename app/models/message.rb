class Message < ApplicationRecord
  validates :body, presence: true

  belongs_to :chatroom

  belongs_to :chatroom_user,
    foreign_key: :chatroom_user_id,
    class_name: :ChatroomUser
end
