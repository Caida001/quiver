class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.string :image_url, default: "https://static-cdn.jtvnw.net/user-default-pictures/0ecbb6c3-fecb-4016-8115-aa467b7c36ed-profile_image-70x70.jpg"

      t.timestamps
    end
    add_index :users, :username
    add_index :users, :session_token, unique: true
  end
end
