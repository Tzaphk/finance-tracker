import React from "react";

const Summary = ({ transactions }) => {
  const totalBalance = transactions.reduce((acc, transaction) => {
    return transaction.type === "Income"
      ? acc + transaction.amount // Add income
      : acc - transaction.amount; // Subtract expense
  }, 0);

  const totalIncome = transactions
    .filter((t) => t.type === "Income")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "Expense")
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="summary">
      <h3>Summary</h3>
      <p><strong>Total Balance:</strong> ₹{totalBalance.toFixed(2)}</p>
      <p style={{ color: "green" }}><strong>Income:</strong> ₹{totalIncome.toFixed(2)}</p>
      <p style={{ color: "red" }}><strong>Expenses:</strong> ₹{totalExpenses.toFixed(2)}</p>
    </div>
  );
};

export default Summary;
