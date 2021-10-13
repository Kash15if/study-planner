import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function MediaControlCard() {
  return (
    <Card
      sx={{
        display: "flex",
        px: "10px",
        py: "5px",
        borderRadius: 1,
        bgcolor: "background.paper",
        color: "#fbc02d",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          m: "10px",
          px: "30px",
          borderLeft: 5,
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            25 Tasks
          </Typography>
          <Typography variant="subtitle1" color="#f50057" component="div">
            Completed
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
      </Box>
    </Card>
  );
}
