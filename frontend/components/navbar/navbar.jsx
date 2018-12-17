import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Modal } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';


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
              <a href="#">QUIVER</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="">
              Browse
            </NavItem>
            <NavItem eventKey={2} href="">
              Store
            </NavItem>
            <NavDropdown eventKey={3} title="..." id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>About</MenuItem>
              <MenuItem eventKey={3.2}>Community Guidelines</MenuItem>
              <MenuItem eventKey={3.3}>Developers</MenuItem>
              <MenuItem eventKey={3.4}>Jobs</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem onClick={this.handleModal1}>{button1}</NavItem>

            <NavItem onClick={this.handleModal2}>{button2}</NavItem>
          </Nav>
        </Navbar>

        <Modal show={this.state.showModal1} onHide={this.close1}>
          <Modal.Header closeButton>
            <Modal.Title>Log in to Quiver</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit} >
            <h4>Username</h4>
            <br/>
            <input type="text" value={this.state.username} onChange={this.update('username')} />
            <br/>
            <br/>
            <h4>Password</h4>
            <br/>
            <input type="password" value={this.state.password} onChange={this.update('password')} />
            <br/>
            <input className="session-submit" type="submit" value="Log In" />
            </form>
            <button className="login-button" onClick={this.handleGuestLogin}>Demo Login</button>
          </Modal.Body>
        </Modal>

        <Modal show={this.state.showModal2} onHide={this.close2}>
          <Modal.Header closeButton>
            <Modal.Title>Join Quiver today</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSignup} >
              <h4>Username</h4>
              <br/>
              <input type="text" value={this.state.username} onChange={this.update('username')} />
              <br/>
              <br/>
              <h4>Password</h4>
              <br/>
              <input type="password" value={this.state.password} onChange={this.update('password')} />
              <br/>
              <br/>
              <label className="birthday">Date of Birth
                <div className="dropdown">
                  <select>
                      <option value>Month</option>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                  </select>

                  <input type="number" name="Day" min="1" max="2" />
                  <input type="number" name="Year" min="4" max="4" />
                </div>
              </label>
              <br/>
              <h4>Email</h4>
              <br/>
              <input type="text" ></input>
              <br/>
              <p>By clicking Sign Up, you are indicating that you have read and agree to the Terms of Service and Privacy Policy.</p>
              <br/>
              <input className="session-submit" type="submit" value="Sign Up" />
            </form>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default withRouter(NavBar);
