import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { loadUser } from "../action/authaction";

import GroupesList from "./GroupesList";

import { Button, Modal } from "react-bootstrap";

import { creategroupe } from "../action/groupeaction";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Group = () => {
  

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
      <GroupesList/>
        </div>
    )
}

export default Group
