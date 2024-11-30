import { Box } from "@mui/material";
import Expense from "./Expense";
import { useState } from "react";

function Expenses() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: "Car Insurance",
      amount: 294.67,
    },
    {
      id: 2,
      title: "Car Insurance",
      amount: 294.67,
    },
    {
      id: 3,
      title: "Car Insurance",
      amount: 294.67,
    },
  ]);
  const handleDeleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
    console.log(id);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
      {expenses.map((expense) => (
        <Expense
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          onDelete={handleDeleteExpense}
        />
      ))}
    </Box>
  );
}

export default Expenses;
