import { connect } from 'react-redux';
import FollowIndex from './follow_index';
import { requestFollows, deleteFollow } from '../../actions/follow_actions';

const mapStateToProps = state => ({
  follows: Object.values(state.entities.follows),
  currentUser: state.session.currentUser
});


const mapDispatchToProps = dispatch => ({
  requestFollows: () => dispatch(requestFollows()),
  deleteFollow: (followId) => dispatch(deleteFollow(followId))
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowIndex);
