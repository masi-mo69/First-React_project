import React, { useState } from 'react';
import moment from 'jalali-moment';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpenseList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('1398');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    const jalaliYear = moment(expense.date).locale('fa').format('jYYYY'); 
    return jalaliYear === filteredYear;
  });
  

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;