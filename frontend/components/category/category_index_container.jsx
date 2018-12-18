import { connect } from 'react-redux';
import CategoryIndex from './category_index';
import { requestAllCategories, requestSingleCategory } from '../../actions/category_actions';


const mapStateToProps = state => ({
  categories: Object.values(state.entities.categories)
})

const mapDispatchToProps = dispatch => ({
  
  requestAllCategories: () => dispatch(requestAllCategories()),
  requestSingleCategory: (category) => dispatch(requestSingleCategory())
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryIndex)
