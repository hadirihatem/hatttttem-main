import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UploadImg from "./UploadImg";

import { loadUser } from "../action/authaction";
import "./Profile.css";


const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.user) dispatch(loadUser());
  }, [dispatch, auth.user]);


  return (
    <div className="feed-container">
      {/* <button onClick={() => profileData()}>New Person</button> */}
      <div className="cardgr">
        <img
          class="avatar"
          src={user.avatar}
          style={{ borderRadius: "50%", width: "300px", height: "300px" }}
        />

        <h1 style={{ color: "black" }}>{user.firstname}</h1>
        <p style={{ color: "black" }}>{user.email}</p>
        <p style={{ color: "black" }}>{user.bio}</p>
        <UploadImg />
      </div>
  
     
    </div>
  );
};

export default Profile;
