import React from "react";
import GroupesList from "./GroupesList";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addsub } from "../action/groupeaction";

const Groupes = ({ groupe }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handlesub = () => {
    dispatch(addsub(groupe._id, user._id));
  };

  return (
    <div>
      <Link to={`/groupe/${groupe._id}`}>
        {" "}
        <h1>{groupe.theme} </h1>
      
      </Link>
     
      <button onClick={handlesub}>subscribe</button>
    </div>
  );
};

export default Groupes;
