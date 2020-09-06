import React from 'react';
import './Comment.css';

const Comment = (props) => {
  const {name, body} = props.comment;
  const {url} = props.image;

  return (
    <div className="comment">
      <div>
        <img className="userImage" src={url} alt=""/>
      </div>
      <div>
        <h3 className="userName">Name: {name}</h3>
        <p className="userComment">Comment: {body}</p>
      </div>
    </div>
  );
};

export default Comment;