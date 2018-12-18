class Category < ApplicationRecord
  has_many :channels,
    foreign_key: :category_id,
    class_name: :Channel
end 
