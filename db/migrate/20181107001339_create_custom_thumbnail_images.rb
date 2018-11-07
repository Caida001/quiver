class CreateCustomThumbnailImages < ActiveRecord::Migration[5.2]
  def change
    create_table :custom_thumbnail_images do |t|
      t.integer :video_id

      t.timestamps
    end
  end
end
