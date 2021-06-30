import React from "react";
import GroupesList from "./GroupesList";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addsub } from "../action/groupeaction";
import './Groupes.css'

const Groupes = ({ groupe }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handlesub = () => {
    dispatch(addsub(groupe._id, user._id));
  };

  return (
    
   <div className="wrapper">
  <div className="card">
  
      
    <img src="/images/camp1.jpg"/>
    <div className="info">
    <Link to={`/groupe/${groupe._id}`}>
        {" "}
        <div>
        <h1>{groupe.theme} </h1>
        </div>
      </Link>
     
      <button onClick={handlesub}>subscribe</button>
    </div>
  </div>
  
      {/*  */}
      
      </div>
  );
};

export default Groupes;