import React from 'react'
import GroupesList from './GroupesList'
import {Link} from 'react-router-dom'
const Groupes = ({groupe}) => {
    return (
        <div>
<Link to={`/groupe/${groupe._id}`}> <h1>{groupe.theme} </h1></Link>
        </div>
    )
}

export default Groupes

