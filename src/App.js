import React, { useState } from 'react';
import Expenses from "./component/Expenses/Expenses";
import NewExpense from './component/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'دستمال توجیبی',
    amount: 94.000,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'تلویزیون جدید', amount: 799.000, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'بیمه ماشین',
    amount: 294.000,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'میز چوبی جدید',
    amount: 450.000,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [ expense, ...prevExpenses]
    });
  };
  
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
