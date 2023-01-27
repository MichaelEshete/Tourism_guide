import React, { useState } from "react";
import classes from "./UserNavigation.module.css";
import logo from "../../../img/logo.png";
// import logo1 from "../../../img/eDirr.png";
import profile from "../../../img/pexels-photo-614810.png";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotificationsOutline, IoIosChatbubbles } from "react-icons/io";
import { BiCaretDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { BiHelpCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const UserNavigation = () => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownHandler = () => {
    setDropdown(!dropdown);
  };
  const downHandler = () => {
    setDropdown(false);
  };
  return (
    <nav className={classes["userNav-container"]}>
      <div className={classes["userNav-left"]}>
        <div className={classes["userNav-logo"]}>
          <img src={logo} alt="logo" />
          {/* <img src={logo1} alt="logo" /> */}
        </div>
        <div className={classes["userNav-menu"]}>
          <span>Welcome, </span>
          <span>Jhon doe</span>
        </div>
      </div>
      <div className={classes["userNav-right"]}>
       
        
        <div
          className={classes["userNav-profile"]}
          // onMouseLeave={downHandler}
          onClick={dropdownHandler}
        >
          <img src={profile} alt="profile" />
          <span>
            <BiCaretDown />
          </span>
          {dropdown && (
            <div
              className={classes["userNav-dropdown"]}
              onMouseLeave={downHandler}
            >
              <li>
                <Link to={"/my-account"}>
                  <i>
                    <CgProfile />
                  </i>
                  My profile
                </Link>
              </li>
              <hr />
              <li>
                <Link to={"/help"}>
                  <i>
                    <BiHelpCircle />
                  </i>
                  help
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <i>
                    <FiLogOut />
                  </i>
                  log out
                </Link>
              </li>
            </div>
          )}
        </div>
      </div>
      <i>
        <IoIosChatbubbles />
      </i>
    </nav>
  );
};

export default UserNavigation;
