import { RECEIVE_ALL_CATEGORIES, RECEIVE_SINGLE_CATEGORY } from '../actions/category_actions'

const categoriesReducer = (state = {}, action) => {
  Object.freeze(state)

  switch(action.type) {
    case RECEIVE_ALL_CATEGORIES:
      return action.categories;
    case RECEIVE_SINGLE_CATEGORY:
      return action.category;
    default:
      return state;
  }
}

export default categoriesReducer;
