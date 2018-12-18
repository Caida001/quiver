import React from 'react';
import $ from 'jquery';
import { withRouter, Link, NavLink } from 'react-router-dom';

class FollowIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestFollows();
    $('.btn-expand-collapse').click(function(e) {
				$('.navbar-primary').toggleClass('collapsed');
      });
  }

  render() {
    const follows = this.props.follows;

    if(follows.length > 0) {

      return (
        <div className="follow-index-container">
          <header className="follow-header">
            <h2>Subscriptions</h2>
          </header>

        <nav class="navbar-primary">
          <a href="#" class="btn-expand-collapse"><span class="glyphicon glyphicon-menu-left"></span></a>
          <ul class="navbar-primary-menu">
            <li>
              <a href="#"><span class="glyphicon glyphicon-list-alt"></span><span class="nav-label">Dashboard</span></a>
              <a href="#"><span class="glyphicon glyphicon-envelope"></span><span class="nav-label">Profile</span></a>
              <a href="#"><span class="glyphicon glyphicon-cog"></span><span class="nav-label">Settings</span></a>
              <a href="#"><span class="glyphicon glyphicon-film"></span><span class="nav-label">Notification</span></a>
              <a href="#"><span class="glyphicon glyphicon-calendar"></span><span class="nav-label">Monitor</span></a>
            </li>
          </ul>
        </nav>


          <div className="follow-list">
            <ul>
              {follows.map(follow => (
                <Link key={follow.id} to={`/channels/${follow.followed_channel.id}`}>
                  <li className="follow-item">
                    <div className='followed-channel-img'>
                      <img src={follow.followed_channel.owner.image_url} />
                    </div>

                    <div className="followed-channel-name">
                      <h3>{follow.followed_channel.name}</h3>
                    </div>

                  </li>
                </Link>
              ))}

            </ul>
          </div>
        </div>
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

            <a href="#/channels" class="btn-expand-collapse"><span class="glyphicon glyphicon-menu-left"></span></a>
            <ul class="navbar-primary-menu">
              <li>
                <a href="#"><span class="glyphicon glyphicon-list-alt"></span><span class="nav-label">Dashboard</span></a>
                <a href="#"><span class="glyphicon glyphicon-envelope"></span><span class="nav-label">Profile</span></a>
                <a href="#"><span class="glyphicon glyphicon-cog"></span><span class="nav-label">Settings</span></a>
                <a href="#"><span class="glyphicon glyphicon-film"></span><span class="nav-label">Notification</span></a>
                <a href="#"><span class="glyphicon glyphicon-calendar"></span><span class="nav-label">Monitor</span></a>
              </li>
            </ul>
          </nav>

      );
    }
  }
}

export default withRouter(FollowIndex);
