import React from "react";
import Typography from "@mui/material/Typography";
import AddExpense from "../components/AddExpense";
import { Box } from "@mui/material";

function Create() {
  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Create New Expense!
      </Typography>
      <AddExpense />
    </Box>
  );
}

export default Create;
