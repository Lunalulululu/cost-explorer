import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpensesDate";
const ExpenseItem = (props) => {
  // props have three attributes: amount, title, date
  return (
    <div className="expense-item">
      <ExpenseDate />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
    </div>
  );
};
export default ExpenseItem;
