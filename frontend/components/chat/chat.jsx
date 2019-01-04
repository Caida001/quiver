import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import MessageItem from './message_item';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.channelId = this.props.match.params.channelId;

    if(Object.keys(this.props.currentUser).length) {

      this.state = {
        chatroom_id: parseInt(this.channelId),
        body: '',
        chatroom_user_id: Object.values(this.props.currentUser)[0]['id']
      }
    }

    this.handleChat = this.handleChat.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    debugger
    this.props.requestAllChannels();
    this.props.requestChatroom(this.channelId).then(() => {


      this.subscription = App.cable.subscriptions.create(
        {
          channel: 'MessagesChannel',
          id: this.props.match.params.channelId
        }, {
          received: data => {
            this.props.receiveMessage(data.message);

          }
        }
      )
    })
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.channelId != nextProps.match.params.channelId) {
      this.props.requestChatroom(nextProps.match.params.channelId);
      this.channelId = nextProps.match.params.channelId;
    }
  }

  componentWillUnmount() {
    App.cable.subscriptions.remove(this.subscription)
  }

  handleChat(e) {
    e.preventDefault();
    debugger
    if(this.state.body !== "") {
      this.props.addMessage(this.state).then(
        this.setState({body: ""})
      )
    }
  }

  update(e) {
    this.setState({
      body: e.currentTarget.value
    })
  }

  handleEnter(e) {
    if(e.key === 'Enter') {
      e.preventDefault();
      this.handleChat(e);
    }
  }

  render() {
    const messages = this.props.messages;
    const currentUser = this.props.currentUser;
    let submitMes = currentUser ? this.handleChat : "";
    debugger
    let text;
    if(Object.keys(currentUser).length) {
      text = <textarea id='text' value={this.state.body} onChange={this.update} onKeyPress={this.handleEnter} placeholder='start chatting here!!!' />
    } else {
      text = <textarea id='text' placeholder='Please log in first' disabled />
    }

    if(messages && this.props.channel) {

      return (
        <div className='chat-container'>
          <header id='title'>
            <h2>{this.props.channel.name}{"'s"} Chatroom</h2>
          </header>

          <div className="chat-box">
            <div id='chat-show' ref={el => {this.display = el}}>
              {messages.map(message => (
                <MessageItem key={message.id} currentUser={currentUser} message={message} />
              ))}
            </div>

            <div id='input'>
              {text}
              <div id='send'>
                <button onClick={submitMes}>Chat</button>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return <div />
    }
  }
}
