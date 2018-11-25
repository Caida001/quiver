import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/navbar';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isLoggedIn = this.props.currentUser ? true : false;
    let button1;
    let button2;

    if(isLoggedIn) {
      button1 = <h2>Hi {this.props.currentUser.username}</h2>;
      button2 = <button className="logout" onClick={this.props.logout}>Log Out</button>;
    } else {
      button1 = <button className="login" >Log in</button>;
      button2 = <button className="signup" >Sign up</button>
    }

    return (
      <h3>diofeioedofjfijd</h3>
    )


  }
}
