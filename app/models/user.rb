class User < ApplicationRecord
  validates :username, :email, :session_token, :password_digest, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password
  after_initialize :ensure_session_token


  has_one :channel,
    class_name: :Channel,
    foreign_key: :owner_id

  has_many :subscriptions,
    class_name: :Subscription,
    foreign_key: :subscriber_id

  has_many :subscribers,
    through: :channel,
    source: :my_subscriptions

  has_many :videos,
    foreign_key: :uploader_id,
    class_name: :Video

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
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

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
