import * as APIUtil from '../util/category_api_util'

export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';
export const RECEIVE_SINGLE_CATEGORY = 'RECEIVE_SINGLE_CATEGORY';


export const receiveAllCategories = categories => ({
  type: RECEIVE_ALL_CATEGORIES,
  categories
})

export const receiveSingleCategory = category => ({
  type: RECEIVE_SINGLE_CATEGORY,
  category
})

export const requestAllCategories = () => dispatch => (
  APIUtil.fetchAllCategories().then(categories => dispatch(receiveAllCategories(categories)))
)

export const requestSingleCategory = (categoryId) => dispatch => (
  APIUtil.fetchSingleCategory(categoryId).then(category => dispatch(receiveSingleCategory(category)))
)
