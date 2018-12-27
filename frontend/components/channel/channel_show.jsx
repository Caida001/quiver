import React from 'react';
import { Link } from 'react-router-dom';


export default class ChannelShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleFollowToggle = this.handleFollowToggle.bind(this);
  }

  componentDidMount() {

    this.props.requestSingleChannel(this.props.match.params.channelId);

  }

  handleFollow() {
    if(Object.keys(this.props.currentUser).length) {
      return <div className="follow-button">{this.handleFollowToggle()}</div>
    } else {
      return (
        <div className="follow-warning">
          <button className="follow-button">Follow</button>
          <div className="tooltip">Please Login to Follow</div>
        </div>
      )
    }
  }

  handleFollowToggle() {
    let { follows, followedChannelIds, addFollow, deleteFollow, currentUser, channel } = this.props;
    if(followedChannelIds.includes(channel.id)) {
      let followId;
      follows.forEach(el => {
        if(el['followed_channel_id'] == channel.id) followId = el['id']
      })
    
      return <button onClick={() => deleteFollow(followId)}>Unfollow</button>
    } else {
      return <button onClick={() => addFollow({follower_id: currentUser.id, followed_channel_id: channel.id})}>Follow</button>
    }
  }

  render() {
    const channel = this.props.channel;

    if(channel != undefined) {
      return (
        <div className="video-player">
          <iframe src={channel.vid_url} height='490' width='872' frameBorder='0' scrolling='no' autoplay='0' allowFullScreen='true'></iframe>
          <div className='info-video'>
            <div className='info-video-left'>
              <img src={channel.owner.image_url}></img>
              <div className='info-header'>
                <h4>{channel.owner.name}</h4>
                <h4>{channel.name}</h4>
              </div>
            </div>
            {this.handleFollow()}
          </div>
        </div>
      )
    } else {
      return <div />
    }
  }
}
