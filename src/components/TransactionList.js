import React from "react";

const TransactionList = ({ transactions }) => {
  return (
    <div className="transaction-list">
      <h3>Transaction List</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li
            key={index}
            className={`transaction-item ${transaction.type.toLowerCase()}`}
          >
            {transaction.description} - {transaction.category}
            <span>
              {transaction.type === "Income" ? "+" : "-"}₹
              {transaction.amount.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
