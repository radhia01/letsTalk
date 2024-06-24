import React from "react";
import { useRef } from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { updateImageProfile } from "../redux/actions/user";

const EditPicture = ({seteditpic}) => {
  const dispatch=useDispatch()
  const iduse = useSelector(state=>state.user.user)._id
  const [file, setfile] = useState(null);
  const {token}=useSelector(state=>state.user)
  // states
  const [show, setshow] = useState(true);
  const [showUpdateImage, setShowUpdateImage] = useState(false);
  // useRef
  const inputFile = useRef(null);
  // functions

  const handleSelectFile = async (e) => {
    setfile(e.target.files[0]);
  };
  const openfileDialog = () => {
    inputFile.current.click();
  };
  const reset = () => {
    setshow(false);
  };
  const updateUserImage = async () => {
    if (file) {
      const data = new FormData();
      data.append("file", file);
      const response = await axios.post(
        `https://lets-talk-backend.vercel.app/upload/${iduse}`,
        data,
        {headers:{
          Authorization:`Bearer ${token}`
        }}
      );
      if (response.data) {
      
        dispatch(updateImageProfile(response.data))
        setShowUpdateImage(false);
        seteditpic(false)
      }
    }
  };
  useEffect(() => {
    if (file) {
      setShowUpdateImage(true);
    }
  }, [file]);
  return (
    <div>
      {show === true ? (
        <div className=" card photo ">
          <div className="card-body p-1" style={{ backgroundColor: "#BFBFBF" }}>
            <h5
              className="text-center"
              style={{ fontFamily: "Lobster Two, cursive", color: "black" }}
            >
              {" "}
              Update Profile Picture{" "}
            </h5>
            <ul className="list-group">
              <li className="list-group-item">
                <input
                  type="file"
                  ref={inputFile}
                  id="fileLoader"
                  style={{ display: "none" }}
                  onChange={handleSelectFile}
                />
                <input
                  type="button"
                  className="btn bg-white"
                  id="import"
                  value="Import picture"
                  onClick={() => openfileDialog()}
                />
              </li>
              <li className="list-group-item">
                <input
                  type="button"
                  className="btn btn bg-white "
                  value="Cancel"
                  onClick={() => reset()}
                />
              </li>
            </ul>
          </div>
        </div>
      ) : null}
      {showUpdateImage && (
        <div className="card confirm_updated">
          <div className="card-header">Your image will be updated</div>
          <div className="card-body d-flex justify-content-center">
            <button className="btn confirm_btn" onClick={updateUserImage}>
              Confirm
            </button>
            <button className="btn cancel_btn">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditPicture;
