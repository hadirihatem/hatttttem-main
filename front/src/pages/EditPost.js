import BorderColorIcon from "@material-ui/icons/BorderColor";
import React, { useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { Modal, Input } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Upload, message, Button } from "antd";
import { updatepost } from "../action/postaction";

const EditPost = ({post}) => {
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [changepost, setChangepost] = useState({
    title: post.title,
    discription:post.discription,
    picture: post.picture,
  });
  const showModal = (e) => {
    setChangepost({ ...changepost, [e.target.name]: e.target.value })
    setVisible(true);
  };

  const handleOk = (e) => {
    dispatch(updatepost(post._id,changepost))
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  const props = {
    name: "file",
    headers: {
      authorization: "authorization-text",
    },
  };

  

  return (
    <div>
      <BorderColorIcon onClick={showModal} />
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      > 
        <Input placeholder={post.title}  />
        <Input placeholder={post.discription} />
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Modal>
    </div>
  );
};

export default EditPost;
