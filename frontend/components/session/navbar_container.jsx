import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import NavBar from '../navbar/navbar';

const mapStateToProps = ({errors, session, entities: { users }}) => {
  return {
    errors: errors.session,
    navLink: <Link to="/signup">sign up instead</Link>,
    currentUser: users[session.id]
};
};

const mapDispatchToProps = dispatch => {
  const demo = {username: 'guest', password: 'password'}
  return {
    processForm: user => dispatch(login(user)),
    demoLogin: () => dispatch(login(demo)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
