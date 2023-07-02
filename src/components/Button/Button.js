import React from "react";
import classes from "./Button.module.css";

const Button = ({ label }) => {
  let buttonClassName = '';
  if (label === "Add") {
    buttonClassName = classes.btnAdd;
  } else if (label === "Delete") {
    buttonClassName = classes.btn;
  } 

  const deliteData = (id) => {
    
  }
  return (
    <button className={buttonClassName} deliteData={deliteData}>
      {label}
    </button>
  );
};

export default Button;
