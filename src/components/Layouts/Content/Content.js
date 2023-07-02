import React from "react";
import classes from "./Content.module.css";
import { ItemList } from "../../ItemList/ItemList";
import Data from "../../Data/Data";
import { useState } from "react";
import Input from "../../Input/Input";
import Button from "../../Button/Button";

const Content = () => {
  const [datas, setData] = useState(Data);

  const addData = (value) => {
    setData([
      ...datas,
      { id: Date.now().toString(), text: value, checked: false, done: false },

    ]);
    console.log(datas)
  }
  return (
    <div className={classes.content}>
      <h1 className={classes.h1}>To do List</h1>
      <div>
        {datas.map((item, id) => (
          <ItemList item={item} />
        ))}
      </div>
      <div className={classes.flex}>
        <div className={classes.inputContainer}>
          <Input type="text" placeholder="Type a new text" addData={addData} />
        </div>
        <div className={classes.inputButton}>
          <Button label="Add" />
        </div>
      </div>
    </div>
  );
};

export default Content;
