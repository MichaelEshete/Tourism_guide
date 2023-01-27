import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../img/logo.png";
import Button from "../UI/Button";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <nav className={classes["nav-container"]}>
      <div className={classes["nav-left"]}>
        <div className={classes["nav-logo"]}>
          <img src={logo} alt="logo" />
       
        </div>
        <div className={classes["nav-menu"]}>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <HashLink to={'/#about'}>About Us</HashLink>
            </li>
            <li>
              <HashLink to={'/#service'}>Service</HashLink>
            </li>
            <li>
              <HashLink to={'/#contact'}>Contact</HashLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes["nav-right"]}>
        <Button />
      </div>
    </nav>
  );
};

export default MainNavigation;
