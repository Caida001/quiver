import React from 'react';
import $ from 'jquery';
import { withRouter, Link, NavLink } from 'react-router-dom';

class FollowIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.requestAllChannels();
    this.props.requestFollows();
    $('.btn-expand-collapse').click(function(e) {
				$('.navbar-primary').toggleClass('collapsed');
      });
  }

  handleClick(id) {
    this.props.deleteFollow(id)
  }


  render() {
    const follows = this.props.follows;

    if(Object.keys(this.props.currentUser).length > 0) {

      return (

        <nav class="navbar-primary">
          <div className="follow-container">
            <header className="follow-header">
              <img src="https://static.twitchcdn.net/assets/upsell-center-dark-6c092df86238db84cff1.png" />

              <h4 className="discover">Follow channels and easily access your favorites here. Here are a few you might like!</h4>

            </header>
          </div>
          <h4 className="featured">Followed Channels</h4>

          <a href="#/channels" class="btn-expand-collapse"><span class="glyphicon glyphicon-menu-left"></span></a>
          <ul class="navbar-primary-menu">
            {this.props.follows.map(follow => (

                <li key={follow.id} className="follow-item">
                  <Link key={follow.id} to={`/channels/${follow.followed_channel.id}`}>
                    <span className='glyphicon'>
                      <img src={follow.followed_channel.pic_url} />
                    </span>


                    <span className="nav-label">
                      {follow.followed_channel.name}
                    </span>
</Link>
                    <button type="button" class="close" aria-label="Close" onClick={this.handleClick(follow.followed_channel.id)}>
                      <span aria-hidden="true">&times;</span>
                    </button>


                </li>

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

            <a href="#/channels" class="btn-expand-collapse"><span class="glyphicon glyphicon-menu-left"></span></a>
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
