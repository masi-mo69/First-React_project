import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseDatawithId = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseDatawithId);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );

}
export default NewExpense;