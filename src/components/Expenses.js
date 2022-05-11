import React from "react";
import ExpenseItem from "./ExpenseItem";
const Expenses = (props) => {
  console.log("Expenses.js" + props.expenses);
  return (
    <div>
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};
export default Expenses;
