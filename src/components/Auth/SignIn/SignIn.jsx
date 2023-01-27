import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./SignIn.module.css";

const SignIn = () => {
  const [form, setForm] = React.useState({
    userName: '',
    
    password: '',
    
  });
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // const { userName,fullName,phoneNumber,email,password,cpassword,check} = this.state;
   const email = form.userName
   const password =form.password
  //  alert(email);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,password}  ),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.role, "login");
        if (data.status == "ok" && data.role =="user") {
          console.log(data.role);
         
          alert("login successful user");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./dashboard";

          console.log(data.data);
        }
        else if (data.status == "ok" && data.role=="admin") {
         
          alert("login successful admin");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./adminDashboard";
        }
      });

    // alert(form.fullName + ' ' + form.password);
};
  
  return (
    <div className={classes["login-container"]}>
      <div className={classes["login"]}>
        <h1 className={classes["login-h1"]}>Sign In</h1>
        <h1 className={classes["login-h4"]}>
          Welcome back! Glad to see you,Again!{" "}
        </h1>
        <form className={classes["login-form"]} onSubmit={handleSubmit}>
          <div className={classes["form-control"]}>
            <label htmlFor="username">user name</label>
            <input
              type={"text"}
              id="userName"
              autoComplete={"off"}
              value={form.userName}
              onChange={handleChange}
             
              required
            />
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="password">Password</label>
            <input
              type={"password"}
              id="password"
              value={form.password}
          onChange={handleChange}
           
              required
            />
          </div>
          <div className={classes.forget}>
            <Link to={"/login"}>Forget Password?</Link>
          </div>
          <div className={classes["login-btn"]}>
            <button type='submit'>login</button>
          </div>
        </form>
        <p className={classes["login-p"]}>
          Don't have an account? <Link to={"/register"}>Sign Up Now</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
