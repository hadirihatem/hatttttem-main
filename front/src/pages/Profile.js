import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UploadImg from "./UploadImg";
import "../App.css";
import { loadUser } from "../action/authaction";
import "./Profile.css";
import { Button, Modal } from "react-bootstrap";

import { creategroupe } from "../action/groupeaction";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.user) dispatch(loadUser());
  }, [dispatch, auth.user]);

  const [NewGroupe, setNewGroupe] = useState({
    Name: "",
    theme: "",
    
  });
  const handleChange = (e) => {
    setNewGroupe({
      ...NewGroupe,
      [e.target.name]: e.target.value,
    });
  };

  const [show, setShow] = useState(false);

  const handleClose = (e) => {
   
    dispatch(creategroupe({ ...NewGroupe }));
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <div className="feed-container">
      {/* <button onClick={() => profileData()}>New Person</button> */}
      <div className="card">
        <img
          class="avatar"
          src={user.avatar}
          style={{ borderRadius: "50%", width: "300px", height: "300px" }}
        />

        <h1 style={{ color: "white" }}>{user.firstname}</h1>
        <p className="title">{user.email}</p>
        <p style={{ color: "white" }}>{user.bio}</p>
        <UploadImg />
      </div>
      <div>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label style={{ marginRight: 10 }}>name </label>

            <input type="text" name="Name" onChange={handleChange} />

            <br />

            <label style={{ marginRight: 10 }}>theme </label>

            <input type="text" name="theme" onChange={handleChange} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Profile;
