import React, { useState } from 'react';
import classes from  './Input.module.css'

const Input = ({ type, placeholder, addData }) => {
  let [value, setValue] = useState("");
  let inputClassName = "";

  if (type === "checkbox") {
    inputClassName = classes.inputCheckbox;
  } else if (type === "text") {
    inputClassName = classes.inputText;
  } else {
    inputClassName = "default-input";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(value);
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className={inputClassName}
        type={type}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </form>
  );
};

export default Input;
