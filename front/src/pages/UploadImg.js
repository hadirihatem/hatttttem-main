import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPicture } from "../action/useraction";

const UploadImg = () => {
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handlePicture = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("userId", user._id);
    data.append("picture", file);

    dispatch(uploadPicture(data, user._id));
  };

  return (
    <form action="" onSubmit={handlePicture} className="upload-pic">
      <label htmlFor="file">Changer d'image</label>
      <input
      className="Link"
        type="file"
        id="file"
        name="file"
    
        onChange={(e) => setFile(e.target.files[0])}
      />
      <br/>
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default UploadImg;
