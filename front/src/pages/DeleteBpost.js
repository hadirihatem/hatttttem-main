import React, { useEffect, useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
import { deletepost } from '../action/postaction';
import { useDispatch, useSelector } from 'react-redux';






const DeleteBpost = ({post}) => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
    const posts=useSelector((state)=>state.posts.posts)
    
    const [Delete, setDelete] = useState(false);




    // useEffect(() => {
    //     if (post._id.find(delet=>delet == (user._id))) setDelete(true);
    //     else setDelete(false);
    //   }, [user._id, post.id, Delete]);


    const handledelete=(e)=>{
        e.preventDefault()
        dispatch(deletepost())
      }


  
    return (
        <div>
        <Grid item xs={8}>
        <DeleteIcon onClick={handledelete}  />
       
      </Grid>
        </div>
    )
}

export default DeleteBpost
