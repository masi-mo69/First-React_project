import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('fa-IR', { month: 'long' });
    const day = props.date.toLocaleString('fa-IR', { day: '2-digit' });
    const year = props.date.toLocaleString('fa-IR' , { year: 'numeric' });

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}
export default ExpenseDate;