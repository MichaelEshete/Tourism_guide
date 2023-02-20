import React from "react";
import { Link } from "react-router-dom";
import classes from "./UserDashboard.module.css";
import bg from "../../../img/bg 1.png";
import UserLayout from "../UserLayout/UserLayout";
const AdminDashboard = (props) => {
    const User = localStorage.getItem("UserName");
  const createHandler = () => {
    props.onCreate()
  };
  return (
    <UserLayout>
    <div className={classes["dashboard-container"]}>
      <div className={classes["dashboard-center"]}>
        <h1>{User}</h1>
       
      </div>
    </div>
    </UserLayout>
  );
};

export default AdminDashboard;
