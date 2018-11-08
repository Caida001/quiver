class Video < ApplicationRecord
  validates :title, :description, :video_url, :thumbnail_url, :uploader_id, :channel_id, presence: true

  belongs_to :user,
    foreign_key: :uploader_id,
    class_name: :User

  belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel

  has_one_attached :film
  has_one :custom_thumbnail_image

  validate :ensure_film

  include PgSearch

  pg_search_scope :search, against: [:title]

  def ensure_film
    unless self.film.attached?
      errors[:film] << "no film attached"
    end
  end

  def thumbnail_image(context = nil)
    if self.custom_thumbnail_image
      self.custom_thumbnail_image.image
    else
      if context == 'search'
        self.film.preview(resize: '246x138')
      else
        self.film.preview(resize: '210x118')
      end
    end
  end

  def add_view
    self.views += 1
    self.save!
  end

  def get_video_length(alternative_url = nil)
    if alternative_url
      self.length = extract_duration(alternative_url)
      self.save
    end
    aws_url = self.film.blob.service_url
    if ENV["RAILS_ENV"] = 'development'
      bucket = 'dev'
    elsif ENV["RAILS_ENV"] == 'production'
      bucket = 'prod'
    else
      return nil
    end

    if aws_url
      bucket_url = ""
      object_key = self.film.blob.key
      object_access_url = bucket_url + object_key
      self.length = extract_duration(object_access_url)
      self.save
    end
  end

  def update_thumbnail(thumbnail_file)
    image = self.custom_thumbnail_image
    image.destroy if image
    if thumbnail_file
      ensure_thumbnail_image(thumbnail_file)
    end
  end

  def ensure_thumbnail_image(thumbnail_file)
    if thumbnail_file
      custom_thumbnail_image = CustomThumbnailImage.new
      custom_thumbnail_image.image.attach(io: thumbnail_file, filename: thumbnail_file.original_filename)
      self.custom_thumbnail_image = custom_thumbnail_image
      custom_thumbnail_image.save!
    end
  end

  private

  def extract_duration(url)
    output = `ffmpeg -i #{url} 2>&1`
    m_data = output.match("Duration: ([0-9]+):([0-9]+):([0-9]+).([0-9]+)")
    num_seconds = (m_data[1].to_i * 3600) + (m_data[2].to_i * 60) + (m_data[3].to_i)
    (num_seconds.is_a?(Integer) ? num_seconds : 0)
  end

end
