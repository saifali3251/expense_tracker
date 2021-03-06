import React, { useState } from 'react';
// import ExpenseItem from "./components/Expenses/ExpnseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const dummy_expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses,setExpense] = useState(dummy_expenses)

  const addExpenseHandler = (data) =>{
    console.log(data);

    // console.log(typeof(data));
    // setData1(data)
    setExpense((PrevExpenses12)=>{
      return [data, ...PrevExpenses12]
    });
    console.log(dummy_expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
