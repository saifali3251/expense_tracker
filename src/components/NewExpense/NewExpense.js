import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) =>{
  // try with true and false
  const [addData,setAddData] = useState('yes')


  const saveExpenseHandler = (data) =>{
    console.log('Inside NewExpense:');
    console.log(data);
    console.log('saved here');

    props.onAddExpense(data)

  };
  const onClickHandler = () =>{
    setAddData('no')
  }
  const clearDataHandler = (val) =>{
    console.log(val);
    setAddData(val)
  }
  return (
    <div className="new-expense">

      {addData==='yes' && <button onClick={onClickHandler}>Add New Expense</button>}
      {addData==='no' && <ExpenseForm onClearData={clearDataHandler} onSaveExpenseData={saveExpenseHandler}/>}
      </div>
  );
};

export default NewExpense;