import React from "react";
import { useSelector } from "react-redux";

const UpdateImageProfile = () => {
  const iduse = useSelector(state=>state.user.user)._id
  const {token}=useSelector(state=>state.user)
  const update = async () => {
    await fetch("/editpicture", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-xsrf-token":`${token}`,
      },
      body: JSON.stringify({
        iduse,
      }),
    });
  };
  return (
    <div onSubmit={{ update }} className="col-md-4 offset-md-3 bg-danger">
      <form encrypt="multipart/form-data">
        <input type="file" name="image" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default UpdateImageProfile;
