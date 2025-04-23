import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>فیلتر بر اساس سال</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='1400'>1400</option>
          <option value='1399'>1399</option>
          <option value='1398'>1398</option>
          <option value='1397'>1397</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;