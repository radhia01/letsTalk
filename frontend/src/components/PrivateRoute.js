import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Privateroute = ({ component: Component }) => {
  const {user}=useSelector(state=>state.user)
  return user ? <Component /> : <Redirect to="/" />;
};

export default Privateroute;
