import React from 'react';
import { Link } from 'react-router-dom';

const MessageItem = ({ message, currentUser }) => {
  let colored = "no";

  if(Object.values(currentUser).length) {
    colored = message.username === Object.values(currentUser)[0]['username'] ? "yes" : "no"
  }

  return (
    <div className="message">
      <strong className={colored}>{message.username}</strong>: {message.body}
    </div>
  )
}

export default MessageItem;
