import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UploadImg from "./UploadImg";
import "../App.css";
import { loadUser } from "../action/authaction";
import './Profile.css'
import axios from "axios";
import Button from 'react-bootstrap/Button'

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.user) dispatch(loadUser());
  }, [dispatch, auth.user]);

// const [profileName,setProfileName]=useState("");
// const [profileImage,setProfileImage]=useState("");
// const [profileEmail,setProfileEmail]=useState("");

// const profileData = async ()=>{
//     try{
//         const res = await axios.get("/users/:userId");
//         setProfileEmail(res.data.results[0].Email)
//         setProfileName(`${res.data.results[0].firstName} ${res.data.results[0].lastName}`)
//         setProfileEmail(res.data.results[0].Email)
//     }catch(error){
//         console.log(error)
//     }
// }
// useEffect(() => {
//     profileData();
//   }, []);

  return (
    
<div className='feed-container'>
      {/* <button onClick={() => profileData()}>New Person</button> */}
      <div className="card">
        <img  src={user.avatar} style={{ width: "100%" ,borderRadius:'360%' }} />
        
        <h1 style={{color:'white'}}>{user.firstname}</h1>
        <p className="title">{user.email}</p>
        <p style={{color:'white'}}>{user.bio}</p>
        
          <button  className='btns' buttonStyle='btn--outline'
          buttonSize='btn--large' type="file"><UploadImg/></button>
        
      </div>



    </div>
 
  )}

export default Profile;

