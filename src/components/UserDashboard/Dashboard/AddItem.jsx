import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./UserDashboard.module.css";
import UserLayout from "../../UserDashboard/UserLayout/UserLayout";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const Additems = (props) => {
  const createHandler = () => {
    props.onCreate()
  };
  const [formValue, setFormValues] = useState({
    description: '',
    title: '',
    file: null
  })
  const [postImage, setPostImage] = useState();
  const onFileHandler =  async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setPostImage(base64);
  }


  const handleSubmit = () => {
     
    // const title = formValue.title;
    // const discription = formValue.description;
    // const file = formValue.file;
    //   let key='';
    //   const formValue = new FormData();
    //  for(key in formValue){
    //   const property = formValue[key];
    //  if(property instanceof File){
    //   formValue.append(key,property,property.name)
    //  }else{
    //   formValue.append(key,property.toString())
    //  }
    //    }
   
    const disc = formValue.discription;
    const tit = formValue.title;
    console.log(disc+tit+"ere");
    
    fetch("http://localhost:5000/addItems", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ disc, tit,postImage}),
    }).then((res) => res.json()) 
      .then(() => {
        console.log(formValue, "userRegister");
      });
  }


  return (
    <UserLayout>
    <div className={classes["addItem-main-container"]}>
      {/* <img src={bg} alt="bg" /> */}
      <div className={classes["addItem-container"]}>
        <h1 className={classes['addItem-Header']}>Add Items</h1>

        <form id="add item" onSubmit={(ev) => {
          ev.preventDefault()
          handleSubmit()
        }}
        >
          <div className={classes['addItem-form-container']}>

            <input className={classes['addItem-input-field']} type="text" placeholder="Title" onChange={(e) => {
              setFormValues((prevState) => ({
                ...prevState,
                title: e.target.value
              }))
            }}
            />
            <input className={classes['addItem-input-field']} type="text" placeholder="Add discription" onChange={(e) => {
              setFormValues((prevState) => ({
                ...prevState,
                discription: e.target.value
              }))
            }} />
            <input type="file" lable="Image" name="myFile" id='file-upload' accept='.jpeg, .png, .jpg' onChange={(e) =>onFileHandler(e)}  />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '30px' }}>
              <button className={classes['addItem-button']} type="submit" >submit</button>

              <Link className={classes['addItem-cancel-link']} id="cancel" to={"/dashboard"}  >cancel</Link>
            </div>

          </div>
        </form>
      </div>
    </div>
    </UserLayout>
  );
};
export default Additems;

function convertToBase64(file){
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}