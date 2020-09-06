import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import './PostDetail.css';
import { Button } from '@material-ui/core';

const PostDetail = () => {
  const {postId} = useParams();
  const [post, setPost] = useState({});
  const [comment, setComment] = useState([]);
  const [image, setImage] = useState({});

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setPost(data))
  }, []);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setComment(data))
  }, []);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/photos/${postId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setImage(data))
  }, []);

  return (
    <div>
      <div>
      <Button variant="contained" color="primary" href="/home">Home</Button>
      </div>
      <br/>
      <div className="postDetail">
        <p>Post No: {postId}</p>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
      <h1>Comments</h1>
      {
        comment.map(comment => <Comment comment={comment} image={image}></Comment>)
      }
    </div>
  );
};

export default PostDetail;