import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, signup, logout } from '../../actions/session_actions';
import NavBar from '../navbar/navbar';

const mapStateToProps = ({errors, session, entities: { users }}) => {
  return {
    errors: errors.session,
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => {

  return {
    processForm: user => dispatch(login(user)),
    processForm1: user => dispatch(signup(user)),
    demoLogin: (demoUser) => dispatch(login(demoUser)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
