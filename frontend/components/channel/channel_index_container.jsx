import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { requestAllChannels, requestSingleChannel } from '../../actions/channel_actions';

const mapStateToProps = state => ({
  channels: Object.values(state.entities.channels)
});

const mapDispatchToProps = dispatch => ({
  requestAllChannels: () => dispatch(requestAllChannels()),
  requestSingleChannel: (channel) => dispatch(requestSingleChannel(channel))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);
