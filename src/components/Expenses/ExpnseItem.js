// import React, { useState } from 'react';
import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Cards";

function ExpenseItem(props) {
  // const [title,setTitle] =  useState(props.title);
  // const [title,setTitle] =  useState('Hii');


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2> {props.title} </h2>
        <Card className="expense-item__price"> ${props.amount} </Card>
      </div>
      {/* <button onClick={clickHandler}>CLlick</button> */}
    </Card>
  );
}
 
export default ExpenseItem;
