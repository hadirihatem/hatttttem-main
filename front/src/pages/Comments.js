import React, { useEffect, useState } from 'react'
import { ListItem, ListItemText, ListItemAvatar, Avatar, TextField, Button } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import SendIcon from '@material-ui/icons/Send';



const Comments = (props) => {
const auth = useSelector((state) => state.auth)




 

 

  

    return (
        <div>
            <br/>
            <p>comment</p>
            <hr/>
              {props.comments &&props.comments.map((comment , index)=>
           
                <h2>{comment.writer.firstname} : {comment.content}</h2>
              )} 

      
        </div>
    )
}

export default Comments
