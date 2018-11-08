class CreateSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :subscriptions do |t|
      t.integer :channel_id
      t.integer :subscriber_id

      t.timestamps
    end
    add_index :subscriptions, :channel_id
    add_index :subscriptions, :subscriber_id
  end
end
