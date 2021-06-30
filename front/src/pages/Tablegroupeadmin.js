import React from 'react'

import Fetchgroupe from './Fetchgroupe'

import  { useEffect } from 'react'
import { Table,Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersList } from '../action/useraction';
import { getgroupeadmin } from '../action/groupeaction';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
         <button>accept</button>
          <button>Delete</button>
        </Space>
      ),
    },
  ];


const Tablegroupeadmin = ({match}) =>{
const gadmin = useSelector(state => state.gadmin.groupes)

    const newgroupe = gadmin.find(groupe => groupe._id==match.params.id) || {}
    console.log(newgroupe)


    const dispatch = useDispatch()


    const data = [];
for (let i = 0; i < newgroupe.subvalid.length; i++) {
  data.push({
    key: i,
    name: `${newgroupe.subvalid[i].firstname}-${newgroupe.subvalid[i].lastname}`,
    phone: `${newgroupe.subvalid[i].phone}`,
    email: `${newgroupe.subvalid[i].email} `,
  });
}

   
    return (
        <div>
      
        <Table dataSource={data} columns={columns} />
        
        </div>
    )
}

export default Tablegroupeadmin
