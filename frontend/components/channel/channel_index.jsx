import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllChannels();
  }


  render() {


    if(this.props.channels.length > 0) {

      return(
        <div className="channel-index">

            {this.props.channels.map((channel) => {
            return <li key={channel.id} className="channel-index-item">
              <Link to={`/channels/${channel.id}`}>
                <div className="index-item-image">
                  <img src={channel.pic_url} />
                </div>
                <div className='channel-info'>
                  <div className='user-image'>
                    <img src={channel.owner.image_url} />
                  </div>
                  <div className='index-item-text'>
                    <p>{channel.name}</p>
                    <p>{channel.cate}</p>
                  </div>
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
