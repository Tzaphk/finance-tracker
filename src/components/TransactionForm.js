import React, { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleAddTransaction = (type) => {
    if (!description || !amount || !category) {
      alert("Please fill in all fields");
      return;
    }

    const newTransaction = {
      description,
      amount: parseFloat(amount),
      type, // Now explicitly setting the type as "Income" or "Expense"
      category,
    };

    addTransaction(newTransaction);
    setDescription("");
    setAmount("");
    setCategory("");
  };

  return (
    <div className="transaction-form">
      <h3>Add Transaction</h3>
      <label>Description</label>
      <input
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label>Amount (₹)</label>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <label>Category</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Salary">Salary</option>
        <option value="Freelance">Freelance</option>
        <option value="Food">Food</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Travel">Travel</option>
        <option value="Bills">Bills</option>
      </select>

      <div className="button-group">
        <button onClick={() => handleAddTransaction("Income")} className="btn btn-success">
          Add Income
        </button>
        <button onClick={() => handleAddTransaction("Expense")} className="btn btn-danger">
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default TransactionForm;
