import React from 'react';
import { withRouter, Link, NavLink } from 'react-router-dom';

class FollowIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestFollows();
  }

  render() {
    const follows = this.props.follows;

    if(follows) {

      return (
        <div className="follow-index-container">
          <header className="follow-header">
            <h2>Subscriptions</h2>
          </header>

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
        <div className="follow-container">
          <header className="follow-header">
            <h2>Subscriptions</h2>
          </header>
          <section className="follow-list">
            <p>Sign up or log in to follow channels</p>
          </section>
        </div>
      );
    }
  }
}

export default withRouter(FollowIndex);
