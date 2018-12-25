import React from 'react';
import { Link } from 'react-router-dom';


export default class ChannelShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }

  componentDidMount() {
    debugger
    this.props.requestSingleChannel(this.props.match.params.channelId);
    if(this.props.currentUser) {
      this.props.requestFollows();
    }
  }

  handleFollow(e) {
    e.preventDefault();
    this.props.createFollow({
      follower_id: this.props.currentUser.id,
      followed_channel_id: this.channelId
    });
  }

  handleUnfollow(e) {
    e.preventDefault();
    this.props.deleteFollow(this.channelId);
  }

  render() {
    const channel = this.props.channel;

    if(channel) {
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
          </div>
        </div>
      )
    } else {
      return <div />
    }
  }
}
