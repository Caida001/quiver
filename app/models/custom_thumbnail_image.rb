class CustomThumbnailImage < ApplicationRecord
  belongs_to :video
  has_one_attached :image
  validate :ensure_image

  def ensure_image
    unless self.image.attached?
      errors[:thumbnail_image] << "no thumbnail attached"
    end
  end 
end
