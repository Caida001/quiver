class User < ApplicationRecord
  validates :username, :session_token, :password_digest, presence: true
  validates :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password
  after_initialize :ensure_session_token

  after_create :ensure_channel

  has_one :channel,
    class_name: :Channel,
    foreign_key: :owner_id,
    dependent: :destroy

  has_many :messages

  has_many :follows,
    class_name: :Follow,
    foreign_key: :follower_id,
    dependent: :destroy

  has_many :followed_channels,
    source: :followed_channel,
    through: :follows

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_channel
    self.channel ||= Channel.create!(owner_id: self.id)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
