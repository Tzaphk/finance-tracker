import React, { useState } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";
import './styles/styles.css'; 
; // Import CSS

const App = () => {
  const [transactions, setTransactions] = useState([]);

  // Add transaction
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">💰 Finance Tracker</h2>
      <TransactionForm addTransaction={addTransaction} />
      <Summary transactions={transactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default App;
