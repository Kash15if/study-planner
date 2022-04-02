import { Box } from "@mui/material";
import { Typography } from "@mui/material";

const ManageTaskCard = () => {
  return (
    <Box
      sx={{
        width: "95%",
        height: "auto",
        margin: "0.4rem",
        padding: "0.8rem",
        textAlign: "start",
        backgroundColor: "primary.dark",
        opacity: [0.9, 0.8, 0.7],
        color: "black",
        "&:hover": {
          opacity: [1, 1, 1],
        },
      }}
    >
      <Typography variant="h5">Subject:- S1</Typography>
      <Typography variant="h6">Task :- T1</Typography>
    </Box>
  );
};

export default ManageTaskCard;
