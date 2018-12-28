import React from 'react';
import $ from 'jquery';
import { withRouter, Link, NavLink } from 'react-router-dom';
import FollowIndexItem from './follow_index_item';

class FollowIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    this.props.requestAllChannels();

    if(Object.keys(this.props.currentUser).length > 0) {
      this.props.requestFollows();
    }

    $('.btn-expand-collapse').click(function(e) {
				$('.navbar-primary').toggleClass('collapsed');
      });
  }


  render() {
    const follows = this.props.follows;

    if(Object.keys(this.props.currentUser).length) {

      return (

        <nav class="navbar-primary">
          <div className="follow-container">
            <header className="follow-header">
              <img src="https://static.twitchcdn.net/assets/upsell-center-dark-6c092df86238db84cff1.png" />

              <h4 className="discover">Follow channels and easily access your favorites here. Here are a few you might like!</h4>

            </header>
          </div>
          <h4 className="featured">Followed Channels</h4>

          <div class="btn-expand-collapse"><span class="glyphicon glyphicon-menu-left"></span></div>
          <ul class="navbar-primary-menu">
            {this.props.follows.map(follow => (

              <FollowIndexItem key={follow.id} follow={follow} deleteFollow={this.props.deleteFollow} />
            ))}
          </ul>
        </nav>

      );
    } else {
      return (

          <nav class="navbar-primary">
            <div className="follow-container">
              <header className="follow-header">
                <img src="https://static.twitchcdn.net/assets/upsell-center-dark-6c092df86238db84cff1.png" />
                <h4 className="join">Join the Quiver community!</h4>
                <h4 className="discover">Discover the best live streams anywhere</h4>
                <section className="follow-list">
                  <p>Sign up or log in to follow channels</p>
                </section>
              </header>
            </div>
            <h4 className="featured">Featured Channels</h4>

            <div class="btn-expand-collapse"><span class="glyphicon glyphicon-menu-left"></span></div>
            <ul class="navbar-primary-menu">
              {this.props.channels.slice(0,5).map(channel => {
                return <li>
                  <a href={`#/channels/${channel.id}`}>
                    <span class="glyphicon"><img src={channel.owner.image_url} /></span>
                    <span class="nav-label">{channel.name}</span>
                  </a>
                </li>
              })}
            </ul>
          </nav>

      );
    }
  }
}

export default withRouter(FollowIndex);
