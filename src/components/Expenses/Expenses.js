import React, {useState} from 'react';
import "./Expenses.css";
import Card from "../UI/Cards";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

function Expenses(props) {

  const [filterYear,setFilterYear] = useState('2021')
  // const [filteredItems,setFilteredItems] = useState(props.items)

  const onYearChange = (year) =>{
    setFilterYear(year);
  }
  // const filteredExpenses = props.items

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filterYear;
  });
  return (
      <Card className="expenses">
      <ExpensesFilter selected={filterYear} onChangeFilter={onYearChange} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
      </Card>
  );
}
 
export default Expenses;
