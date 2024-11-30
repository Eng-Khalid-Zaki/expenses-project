import { Box, TextField, Button } from "@mui/material";
import React from "react";

function AddExpense() {
  return (
    <Box
      component={"form"}
      sx={{
        m: "auto",
        mt: 5,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: { xs: "90%", sm: "80%", md: "70%", lg: "50%", xl: "40%" },
      }}
    >
      <TextField id="outlined-basic" label="Expense Title" variant="outlined" />
      <TextField
        id="outlined-basic"
        label="Expense Price"
        variant="outlined"
        type="number"
      />
      <Button sx={{ alignSelf: "start" }} variant="contained">
        Submit
      </Button>
    </Box>
  );
}

export default AddExpense;
