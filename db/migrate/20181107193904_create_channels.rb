class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name
      t.string :pic_url
      t.string :vid_url
      t.string :cate
      t.integer :owner_id
      t.integer :category_id

      t.timestamps
    end
  end
end
