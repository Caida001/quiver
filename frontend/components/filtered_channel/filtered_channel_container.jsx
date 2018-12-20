import { connect } from 'react-redux';
import { requestAllCategories } from '../../actions/category_actions';
import { requestAllChannels } from '../../actions/channel_actions';
import { selectChannelsForCategory, selectCategory } from '../../reducers/selectors';
import FilteredChannel from './filtered_channel';

const mapStateToProps = (state, { match }) => {
  const categoryId = parseInt(match.params.categoryId);
  const category = selectCategory(state.entities, categoryId);
  const channels = Object.values(state.entities.channels).filter(channel => channel.cate == category.name);


  return { categoryId, category, channels }
}

const mapDispatchToProps = dispatch => ({

  requestAllChannels: () => dispatch(requestAllChannels())
})

export default connect(mapStateToProps, mapDispatchToProps)(FilteredChannel)
