import React from 'react'
import { Link } from "react-router-dom";
import classes from "./SignUp.module.css";
const SignUp = () => {
  const [form, setForm] = React.useState({
    userName: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    password: '',
    cpassword: '',
    check: '',
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // const { userName,companyName,phoneNumber,email,password,cpassword,check} = this.state;
   const userName = form.userName
   const companyName  =form.companyName
   const phoneNumber =form.phoneNumber
   const email  =form.email
   const password =form.password
   const cpassword =form.cpassword
   if(password==cpassword){
   
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        userName,companyName,phoneNumber,email,password,cpassword  }  ),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        window.location.href = "./login";
            });

    alert(form.companyName + ' ' + form.password);
   }else{
   alert("make sure you have the right password");
   }
};
  return (
    <div className={classes["sign-container"]}>
      <div className={classes["sign"]}>
        <h1 className={classes["sign-h1"]}>Sign Up</h1>
        <h4 className={classes["sign-h4"]}>Hello! Register to get started</h4>
        <form className={classes["sign-form"]} onSubmit={handleSubmit}>
          <div className={classes["form-control"]}>
            <label htmlFor="">user name</label>
            <input type={"text"} 
            id="userName"
            value={form.userName}
          onChange={handleChange}/>
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="">companyName</label>
            <input type={"text"} 
            id="companyName"
            value={form.companyName}
          onChange={handleChange}/>
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="">Phone number</label>
            <input type={"tel"} 
            id="phoneNumber"
            value={form.phoneNumber}
          onChange={handleChange}/>
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="">Email</label>
            <input type={"email"} 
            id="email"
            value={form.email}
          onChange={handleChange}/>
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="">Password</label>
            <input type={"password"} 
            id="password"
            value={form.password}
          onChange={handleChange}/>
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="">Confirm Password</label>
            <input type={"password"} 
            id="cpassword"
            value={form.cpassword}
          onChange={handleChange}/>
          </div>
          <div className={classes["form-controls"]}>
            <input type={"checkbox"} 
            id="check"
            value={form.check}
          onChange={handleChange}/>
            {/* <span>
              By continuing, you agree to our{" "}
              <Link to={"/"}>Terms of Serves</Link>
            </span> */}
          </div>
          <div className={classes["sign-btn"]}>
            <button type='submit'>sign up</button>
          </div>
        </form>
        <p className={classes["sign-p"]}>
          Already have an account? <Link to={"/login"}>Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp