import React from "react";
import Sidebar from "./Sidebar";
import UserNavigation from "./UserNavigation";
import classes from "./UserLayout.module.css";
const UserLayout = (props) => {
  return (
    <div className={classes["userLayout-container"]}>
      <UserNavigation />
      <main>
        <Sidebar />
        {props.children}
      </main>
    </div>
  );
};

export default UserLayout;
