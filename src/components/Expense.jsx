import { Paper, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
function Expense({ title, amount, onDelete, id }) {
  return (
    <Paper
      id={id}
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: { xs: "90%", sm: "80%", md: "70%", lg: "50%", xl: "40%" },
        m: "auto",
        p: "14px 28px",
      }}
    >
      <Typography>{title}</Typography>
      <Typography>${amount}</Typography>
      <CloseIcon
        onClick={() => onDelete(id)}
        sx={{
          position: "absolute",
          top: 3,
          right: 3,
          cursor: "pointer",
          fontSize: "20px",
        }}
      />
    </Paper>
  );
}

export default Expense;
