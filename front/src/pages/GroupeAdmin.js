// import React from 'react'
// import { Table, Switch, Radio, Form, Space } from 'antd';
// import { DownOutlined } from '@ant-design/icons';
// import { useState } from 'react';

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     sorter: (a, b) => a.age - b.age,
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     filters: [
//       {
//         text: 'London',
//         value: 'London',
//       },
//       {
//         text: 'New York',
//         value: 'New York',
//       },
//     ],
//     onFilter: (value, record) => record.address.indexOf(value) === 0,
//   },
//   {
//     title: 'Action',
//     key: 'action',
//     sorter: true,
//     render: () => (
//       <Space size="middle">
//         <a>Delete</a>
//         <a className="ant-dropdown-link">
//           More actions <DownOutlined />
//         </a>
//       </Space>
//     ),
//   },
// ];

// const data = [];
// for (let i = 1; i <= 10; i++) {
//   data.push({
//     key: i,
//     name: 'John Brown',
//     age: `${i}2`,
//     address: `New York No. ${i} Lake Park`,
//     description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
//   });
// }

// const expandable = { expandedRowRender: record => <p>{record.description}</p> };
// const title = () => 'Here is title';
// const showHeader = true;
// const pagination = { position: 'bottom' };


// const GroupeAdmin = () =>{
//     const [change, setChange] = useState( {
//         bordered: false,
//         loading: false,
//         pagination,
//         size: 'default',
//         expandable,
//         title: undefined,
//         showHeader,
       
//         rowSelection: {},
//         scroll: undefined,
//         hasData: true,
//         tableLayout: undefined,
//         top: 'none',
//         bottom: 'bottomRight',
//       })

 


//   const handleSizeChange = e => {
//     setChange({ size: e.target.value });
//   };

//   const handleTableLayoutChange = e => {
//     setChange({ tableLayout: e.target.value });
//   };



//   const  handleYScrollChange = enable => {
//     setChange({ yScroll: enable });
//   };

//   const  handleXScrollChange = e => {
//     setChange({ xScroll: e.target.value });
//   };

//   const handleDataChange = hasData => {
//     setChange({ hasData });
//   };

  
//     const { xScroll, yScroll  } =  change;

//     const scroll = {};
//     if (yScroll) {
//       scroll.y = 240;
//     }
//     if (xScroll) {
//       scroll.x = '100vw';
//     }

//     const tableColumns = columns.map(item => ({ ...item, ellipsis: change.ellipsis }));
//     if (xScroll === 'fixed') {
//       tableColumns[0].fixed = true;
//       tableColumns[tableColumns.length - 1].fixed = 'right';
//     }

//     return (
//       <div>
//         <Form
//           layout="inline"
//           className="components-table-demo-control-bar"
//           style={{ marginBottom: 16 }}
//         >
         
//           <Form.Item label="Fixed Header">
//             <Switch checked={!!yScroll} onChange={handleYScrollChange} />
//           </Form.Item>
//           <Form.Item label="Has Data">
//             <Switch checked={!!change.hasData} onChange={handleDataChange} />
//           </Form.Item>
        
//           <Form.Item label="Size">
//             <Radio.Group value={change.size} onChange={handleSizeChange}>
//               <Radio.Button value="default">Default</Radio.Button>
//               <Radio.Button value="middle">Middle</Radio.Button>
//               <Radio.Button value="small">Small</Radio.Button>
//             </Radio.Group>
//           </Form.Item>
//           <Form.Item label="Table Scroll">
//             <Radio.Group value={xScroll} onChange={handleXScrollChange}>
//               <Radio.Button value={undefined}>Unset</Radio.Button>
//               <Radio.Button value="scroll">Scroll</Radio.Button>
//               <Radio.Button value="fixed">Fixed Columns</Radio.Button>
//             </Radio.Group>
//           </Form.Item>
//           <Form.Item label="Table Layout">
//             <Radio.Group value={change.tableLayout} onChange={handleTableLayoutChange}>
//               <Radio.Button value={undefined}>Unset</Radio.Button>
//               <Radio.Button value="fixed">Fixed</Radio.Button>
//             </Radio.Group>
//           </Form.Item>
//           <Form.Item label="Pagination Top">
//             <Radio.Group
//               value={change.top}
//               onChange={e => {
//                 setChange({ top: e.target.value });
//               }}
//             >
//               <Radio.Button value="topLeft">TopLeft</Radio.Button>
//               <Radio.Button value="topCenter">TopCenter</Radio.Button>
//               <Radio.Button value="topRight">TopRight</Radio.Button>
//               <Radio.Button value="none">None</Radio.Button>
//             </Radio.Group>
//           </Form.Item>
//           <Form.Item label="Pagination Bottom">
//             <Radio.Group
//               value={change.bottom}
//               onChange={e => {
//                 setChange({ bottom: e.target.value });
//               }}
//             >
//               <Radio.Button value="bottomLeft">BottomLeft</Radio.Button>
//               <Radio.Button value="bottomCenter">BottomCenter</Radio.Button>
//               <Radio.Button value="bottomRight">BottomRight</Radio.Button>
//               <Radio.Button value="none">None</Radio.Button>
//             </Radio.Group>
//           </Form.Item>
//         </Form>
//         <Table
//           {...change}
//           pagination={{ position: [change.top, change.bottom] }}
//           columns={tableColumns}
//           dataSource={change.hasData ? data : null}
//           scroll={scroll}
//         />
//       </div>
//     );
  
// }
// export default GroupeAdmin ;



import React from 'react'
import { Table } from 'antd';
import { useSelector } from 'react-redux';

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
  ];

const GroupeAdmin = ({groupe}) => {
    const  auth = useSelector(state => state.auth.user)
    const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `${auth.firstname}-${auth.lastname}${i}`,
    phone: `${auth.phone}`,
    email: `${auth.email} ${i}`,
  });
}
   
    return (
        <div>
        <Table dataSource={data} columns={columns} />;
        </div>
    )
}

export default GroupeAdmin
