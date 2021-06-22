import {
  
  UPLOAD_PICTURE,
    UPDATEUSER_SUCCES,
    UPDATEUSER_FAIL,
    GETUSERS_SUCCESS,
    GETUSERS_FAIL,
}from './type'
import axios from "axios";

import { loadUser } from './authaction';
//-------------------upoladavatar------------



export const uploadPicture = (data, id) =>(dispatch)=> {
  console.log(data)
       axios
        .put(`http://localhost:4000/uploadpic/${id}`, data)
        .then((res) => dispatch(loadUser(id)))
          .catch((err) =>
          dispatch({
            type: UPLOAD_PICTURE,
            payload: err.response.data.msg,
          })
        );
        }

export const updateuser=(data , id)=>(dispatch)=>{
  axios.put(`http://localhost:4000/users/${id}`, data, id)
  .then((res) => {
    dispatch(getUsersList());
    dispatch({
      type: UPDATEUSER_SUCCES,
      payload: { user: "User Updated" },
    });
  })
  .catch((err) =>
    dispatch({
      type: UPDATEUSER_FAIL,
      payload: err.response.data,
    })
  );
};

//--------------------

export const getUsersList = () => (dispatch) => {
  axios
    .get(`http://localhost:4000/users`)
    .then((res) => {
      dispatch({
        type: GETUSERS_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GETUSERS_FAIL,
      });
      // console.log(err);
    });
}