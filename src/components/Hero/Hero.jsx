import React from "react";
import classes from "./Hero.module.css";
import heroImg from "../../img/tourism.jpg";
import Button from "../UI/Button";
const Hero = () => {
  return (
    <div className={classes["hero-container"]}>
      <div className={classes["hero-left"]}>
        <div className={classes["hero-blur"]}></div>
        <div className={classes["hero-text"]}>
          <h1>Tourism guide through AR </h1>
          <p>
            With us you can register the places you have been
          </p>
          <div className={classes["hero-btn"]}>
            <Button />
          </div>
        </div>
      </div>
      <div className={classes["hero-img"]}>
        <img src={heroImg} alt="hero Img" style={{height:'480px',width:'380px'}} />
      </div>
      {/* <div className={classes["hero-arrow"]}>
        <IoIosArrowDown />
      </div> */}
    </div>
  );
};

export default Hero;
