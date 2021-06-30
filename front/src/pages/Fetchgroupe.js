import React from 'react'
import GroupeAdmin from './GroupeAdmin'
import { Link } from "react-router-dom";

const Fetchgroupe = ({groupe}) => {
  
    console.log(groupe)
    return (
        <div>
         <Link to={`/GroupeAdmin/${groupe._id}`}>  <p> {groupe.Name&&groupe.theme}</p> </Link>
     
        </div>
    )
}

export default Fetchgroupe
