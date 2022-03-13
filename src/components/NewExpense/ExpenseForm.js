import React, { useState, useRef } from 'react';
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title,setTitle] = useState('')
  const [amount,setAmount] = useState('')
  const [date,setDate] = useState('')

  const titleInputRef = useRef();
  const amountInputRef = useRef();
  const yearInputRef = useRef();
  // const [clearData,setClearData] = useState('')

  // const [t1,setT1] = useState('text')
  // const [num,setNum] = useState('number')
  // const [dat,setDat] = useState('date')

  const titleChangedHandler = (event) =>{
    setTitle(event.target.value)
    // console.log(event.target.value);
  }
  const amountChangedHandler = (event) =>{
    setAmount(event.target.value)
    // console.log(event.target.value);
  }
  const yearChangedHandler = (event) =>{
    setDate(event.target.value)
    // console.log(event.target.value);
  }

  const submitHandler = (event) =>{
    // console.log(title);
    const title1 = titleInputRef.current.value;
    const amount1 = amountInputRef.current.value;
    const year1 = yearInputRef.current.value;
    console.log(title1,amount1,year1);
    const expenseData = {
      id : Math.random(),
      title : title,
      amount : +amount,
      date : new Date(date)
    }

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData)

    setTitle('')
    setAmount('')
    setDate('')
    props.onClearData('yes');

    event.preventDefault();
  }

  const clearHandler = (event) =>{
    // setClearData('no')
    // console.log('Hii');
    // console.log('yes');
    props.onClearData('yes');
    event.preventDefault();
  }
  return (
    <form >
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type='text' value={title} onChange={titleChangedHandler} ref={titleInputRef} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={amount} onChange={amountChangedHandler} ref={amountInputRef} />
        </div>
        <div className="new-expense__control">
          <label>Year</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={date} onChange={yearChangedHandler} ref={yearInputRef} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={clearHandler}>Clear</button>
        <button type="submit" onClick={submitHandler}>Add Expense</button>
        {/* <div>{clearData}</div> */}
      </div>
    </form>

  );
};

export default ExpenseForm;