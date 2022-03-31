import Card from "../CustomComponents/TaskCard";
import { Grid } from "@mui/material";
import CardPanTask from "../Components/SideDrawerTask";
import { useState } from "react";

import { Box } from "@mui/material";
const AllTasks = () => {
  const [opener, setOpener] = useState(false);

  const openDrawer = () => {
    setOpener(true);
    console.log(opener);
  };

  const closeDrawer = () => {
    setOpener(false);
    console.log(opener);
  };

  return (
    <div>
      <Box
        sx={{
          width: opener ? "90%" : 0,
          position: "fixed",
          zIndex: 10005,
          top: 0,
          right: 0,
          backgroundColor: "black",
          opacity: 0.9,
          overflowX: "auto",
          transition: "0.5s",
          paddingTop: "60px",
        }}
      >
        <CardPanTask closePanel={closeDrawer} />
      </Box>
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <Grid item md={4} sm={8} xs={12}>
            <div onClick={openDrawer}>
              <Card />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllTasks;
