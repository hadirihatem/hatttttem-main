

import Fetchgroupe from './Fetchgroupe'

import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersList } from '../action/useraction';
import { getgroupeadmin } from '../action/groupeaction';

 


const GroupeAdmin = ({groupe}) => {
const dispatch = useDispatch()
const admingroupe = useSelector(state => state.auth.user._id)
const gadmin = useSelector(state => state.gadmin.groupes)

useEffect(() => {
  dispatch(getgroupeadmin(admingroupe))
  }
, [])

   
   
    return (

        <div>
       {gadmin && gadmin.map(groupe=><Fetchgroupe groupe={groupe}/>) }
       
        </div>
    )
}

export default GroupeAdmin
