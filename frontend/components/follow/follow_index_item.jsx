import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class FollowIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteFollow(this.props.follow.id);
  }


  render() {


    let {follow} = this.props
    if(follow != undefined) {
      return (
        <li className="follow-item">
          <Link className="follow-link" key={follow.id} to={`/channels/${follow.followed_channel.id}`}>
            <span class="glyphicon">
              <img src={follow.followed_channel.pic_url} />
            </span>

            <span class="nav-label">
              {follow.followed_channel.name}
            </span>
          </Link>
            <button type="button" class="close" aria-label="Close" onClick={this.handleDelete}>
              <span aria-hidden="true">&times;</span>
            </button>

        </li>
    )
  } else {
    return <div />
  }
}
}

export default withRouter(FollowIndexItem)
