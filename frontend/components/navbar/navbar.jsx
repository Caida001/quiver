import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Modal } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import Search from '../search/search';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      showModal1: false,
      showModal2: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.close1 = this.close1.bind(this);
    this.close2 = this.close2.bind(this);
    this.handleModal1 = this.handleModal1.bind(this);
    this.handleModal2 = this.handleModal2.bind(this);
  }

  close1() {
    this.setState({ showModal1: false})
  }

  close2() {
    this.setState({ showModal2: false })
  }

  handleModal1() {
    this.setState({ showModal1:true, showModal2:false })
  }

  handleModal2() {
    this.setState({ showModal2:true, showModal1:false })
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.close1();
    this.props.processForm(user);
  }

  handleGuestLogin(e) {
    e.preventDefault();
    const demoUser = {username: "guest", password: "guestpassword"};
    this.close1();
    this.props.demoLogin(demoUser);
  }

  handleSignup(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.close2();
    this.props.processForm1(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const isLoggedIn = this.props.currentUser ? true : false;
    let button1;
    let button2;

    if(isLoggedIn) {
      button1 = <h4>Hi {this.props.currentUser.username}</h4>;
      button2 = <button className="logout" onClick={this.props.logout}>Log Out</button>;
    } else {
      button1 = <button className="login" >Log in</button>;
      button2 = <button className="signup" >Sign up</button>
    }

    return (
      <div>
        <Navbar bsClass="navbar" fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">QUIVER.tv</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#/categories">
              Browse
            </NavItem>
            <NavItem eventKey={2} >
              <Search />
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem onClick={this.handleModal1}>{button1}</NavItem>

            <NavItem onClick={this.handleModal2}>{button2}</NavItem>
          </Nav>
        </Navbar>

        <Modal show={this.state.showModal1} onHide={this.close1}>
          <Modal.Header closeButton>
            <Modal.Title>Log in to Quiver.tv</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit} >
            <h4>Username</h4>

            <input type="text" value={this.state.username} onChange={this.update('username')} />
            <h4>Password</h4>
            <input type="password" value={this.state.password} onChange={this.update('password')} />
            <br/>
            <input className="session-submit" type="submit" value="Log In" />
            </form>
            <button className="login-button" onClick={this.handleGuestLogin}>Demo Login</button>
          </Modal.Body>
        </Modal>

        <Modal show={this.state.showModal2} onHide={this.close2}>
          <Modal.Header closeButton>
            <Modal.Title>Join Quiver.tv today</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSignup} >
              <h4>Username</h4>

              <input type="text" value={this.state.username} onChange={this.update('username')} />

              <h4>Password</h4>

              <input type="password" value={this.state.password} onChange={this.update('password')} />

              <h4>Email</h4>

              <input type="text" ></input>

              <p>By clicking Sign Up, you are indicating that you have read and agree to the Terms of Service and Privacy Policy.</p>

              <input className="session-submit" type="submit" value="Sign Up" />
            </form>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default withRouter(NavBar);
