import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
    return (
        <div className="expenses">
          <ExpenseItem
            title={props.items.title}
            amount={props.items.amount}
            date={props.items.date}
          />
          <ExpenseItem
            title={props.items.title}
            amount={props.items.amount}
            date={props.items.date}
          />
          <ExpenseItem
            title={props.items.title}
            amount={props.items.amount}
            date={props.items.date}
          />
          <ExpenseItem
            title={props.items.title}
            amount={props.items.amount}
            date={props.items.date}
          />
        </div>
    );
}
export default Expenses;