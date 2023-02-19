import axios from "axios";
import { useEffect } from "react";
import classes from "./UserDashboard.module.css";
import UserLayout from "../../UserDashboard/UserLayout/UserLayout";

import list from "../../../../src/img/list.png";
import {GoDiffAdded} from 'react-icons/go'
import React, { useState } from "react";
import { Link } from "react-router-dom";
const ViewItem = () => {
    const email= "hello";
  var reqemail;
  const [items, setitems] = useState([]);
  var itemsname;
  console.log(email); 
  
  useEffect(() => {
    const fetchdata = async () =>{
      const data = await axios.post("http://localhost:5000/Profile", {
          email,
          ContentType: "application/json",
          Accept: "application/json",
        }); 
      console.log(data);
          console.log("pro",data.data);
          setitems(data.data  );
      console.log(items); 
      
      };
     
            fetchdata();
  }, [])
  
  return (
    <UserLayout>
      
    <div className={classes["notify-container"]}>
    
      <div className={classes["notify-body"]}>
        <p>today</p>
        {items.map((item, index) => (
          
          <Link className={classes["notify-info"]}
           to={{pathname:`/notification-detail/${item.name}/${item.edirr}`}}   key={index}>
          <p>{ item.description}</p>
          <p>{ item.title}</p>  
          <img src={item.file} alt="profile" />
          
          <span>{ item.name }</span>
          {window.localStorage.setItem("reqemail", item.name)}
          {/* <span>{item.time}</span> */}
        <hr />
        </Link>
        ))}
      </div>
    </div>
    </UserLayout>
  );
};
export default ViewItem;