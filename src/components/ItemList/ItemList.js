import React, { useState } from 'react';
import classes from './ItemList.module.css';
import Button from '../Button/Button';
import Input  from '../Input/Input';
import TaskItem from '../TaxkLable/TaskItem';

export const ItemList = ({ item }) => {

  return (
    <div className={classes.itemList}>
      <div>
        <Input type="checkbox" />
      </div>
      <div>
        <TaskItem item={item} />
      </div>
      <div>
        <Button label="Delete" />
      </div>
    </div>
  );
};
