class Message < ApplicationRecord

  validates :body, length: {maximum: 171}

  belongs_to :chatroom

# have to explicitely associate it with User, otherwise doesn't recognize chatroom_user
  belongs_to :chatroom_user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :chatroom_user_id

end
