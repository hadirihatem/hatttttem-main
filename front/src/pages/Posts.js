import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from "react-redux";
import "./Feed.css";
import "../App.css";
import Likebutton from './Likebutton'

import { Spinner } from "react-bootstrap";
import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';

import Comments from './Comments';
import Comment from './Comment';
import axios from 'axios';

const Posts = ({ post }) => {
  console.log(post)
  const auth = useSelector((state) => state.auth);
  const  [comments,setComments]= useState(null)
  const [error, setError] = useState(null)
  const dispatch = useDispatch();
  const refreshComment = ()=>{
  
    axios.get("http://localhost:4000/api/comment/getComments/"+post._id)
    .then (res=>{
      console.log(res.data)
      return setComments(res.data)})
    .catch ((err)=>setError(err.response.data))
}
useEffect(() => {
  axios.get("http://localhost:4000/api/comment/getComments/"+post._id)
  .then (res=>setComments(res.data))
  .catch ((err)=>setError(err.response.data))
  }, [])




  // const updateComment = (newComment) => {
  //   setCommentList(commentList.concat(newComment));
  // };

  // const [commentList, setCommentList] = useState([]);

  return post === null || !post ? (
    <div className="all-page-wrapper flex__center">
      <Spinner />
    </div>
  ) : (
    <div className="post">
      
    <div className="post__header">
        <ListItem>
            <ListItemAvatar>
                <Avatar className="post__avatar" src={post.owner.avatar} alt="User" />
            </ListItemAvatar>
            <ListItemText primary={`${post.owner.firstname} ${post.owner.lastname}`} secondary={post.owner.created_at} />
        </ListItem>
        <img
            className="post__image"
            src={post.picture}/>
        <h4 className="post__text"><strong> </strong>{post.title}</h4>
         <h4 className="post__text"><strong> </strong>{post.discription}</h4>
        <div className="post__comments">
         
        
        </div>
        <Comments postId={post._id} comments={comments}/>
        <Comment refreshComment={refreshComment}   postId={post._id} writer={auth.user._id}/>
            <Likebutton post={post}/>
        
    </div>
</div>
  );
};




export default Posts;
