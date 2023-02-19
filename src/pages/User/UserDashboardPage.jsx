import React from "react";
import { Link } from "react-router-dom";

import UserLayout from "../../components/UserDashboard/UserLayout/UserLayout";
import classes from "./UserDashboard.module.css";
// import bg from "../../../img/bg 1.png";
const UserDashboardPage = () => {

  return (
    <UserLayout>
     <div className={classes["dashboard-container"]}>
      {/* <img src={bg} alt="bg" /> */}
      <div className={classes["dashboard-center"]}>
        <h1>Welcome you can add items and view what you added</h1>
        <Link to={"/Additem"}>Add items</Link>
        <Link to={"/ViewItem"}>View item</Link>
      </div>
    </div>
    </UserLayout>
  );
};

export default UserDashboardPage;
