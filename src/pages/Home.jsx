import React from "react";
import Expenses from "../components/Expenses";
import { Box, Typography } from "@mui/material";
function Home() {
  return (
    <Box>
      <Typography variant="h4" mb={2} mt={2}>
        My Expenses!
      </Typography>
      <Expenses />
    </Box>
  );
}

export default Home;
