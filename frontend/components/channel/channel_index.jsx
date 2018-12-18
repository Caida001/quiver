import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllChannels();
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match) {
      if(this.props.match.path !== nextProps.match.path) {
        this.props.requestAllChannels();
      }
    }
  }

  render() {


    if(this.props.channels.length > 0) {

      return(
        <div className="channel-index">

            {this.props.channels.map((channel) => {
            return <li key={channel.id} className="channel-index_item">
              <Link to={`/channels/${channel.id}`}>
                <div className="index-item-image">
                  <img src={channel.pic_url} />
                </div>
                <div className='index-item-name'>
                  <h1>{channel.name}</h1>
                </div>
              </Link>
            </li>})}  

        </div>
      )
    } else {
      return <div>Loading...</div>;
    }

  }

}

export default withRouter(ChannelIndex);
