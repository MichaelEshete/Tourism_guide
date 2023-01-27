import React from "react";
import { Link } from "react-router-dom";
import classes from "./UserDashboard.module.css";
import bg from "../../../img/bg 1.png";
const AdminDashboard = (props) => {
    const User = localStorage.getItem("UserName");
  const createHandler = () => {
    props.onCreate()
  };
  return (
    <div className={classes["dashboard-container"]}>
      {/* <img src={bg} alt="bg" /> */}
      <div className={classes["dashboard-center"]}>
        <h1>{User}</h1>
        {/* <Link to={"/available-edirr"}>Viewprofile</Link> */}
        {/* <Link onClick={createHandler}>Create eDirr</Link> */}
      </div>
    </div>
  );
};

export default AdminDashboard;
