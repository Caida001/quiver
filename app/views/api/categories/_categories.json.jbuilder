categories.each do |category|
  json.set! category.id do
    json.id category.id
    json.name category.name
    json.category_url category.category_url
  end
end 
