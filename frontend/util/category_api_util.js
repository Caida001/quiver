export const fetchAllCategories = () => (
  $.ajax({
    method: "GET",
    url: "api/categories"
  })
)

export const fetchSingleCategory = (categoryId) => (
  $.ajax({
    method: "GET",
    url: `api/categories/${categoryId}`
  })
)
