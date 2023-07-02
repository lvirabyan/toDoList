import React from 'react';
import cslases from "./TeskItem.module.css";


const TaskItem = ({ item }) => {
  return (
    <div>
      <label className={cslases.text} key={item.id}>
        {item.text}
      </label>
    </div>
  );
};
export default TaskItem;
