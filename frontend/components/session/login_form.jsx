import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      show: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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


    return (
      <div>
        <button onClick={() => this.handleShow()}> Open Modal</button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Join Quiver today</Modal.Title>
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
            <input className="session-submit" type="submit" value="login" />
            </form>
            <button className="login-button" onClick={this.props.demoLogin.bind(this)}>Demo Login</button>
          </Modal.Body>
        </Modal>

      </div>
    )


  }
}
