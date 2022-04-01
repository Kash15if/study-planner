import Card from "../CustomComponents/TaskCard";
import { Grid } from "@mui/material";
import CardPanTask from "../Components/SideDrawerTask";
import { useState } from "react";

import { Box } from "@mui/material";
const AllTasks = () => {
  const [opener, setOpener] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const openDrawer = (data) => {
    setOpener(true);
    // console.log(data);
    setSelectedTask(data);
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
          backgroundColor: "RGB(13, 30, 45)",
          color: "BB86FC",
          opacity: 0.99,
          overflowX: "auto",
          transition: "0.5s",
          paddingTop: "60px",
        }}
      >
        <CardPanTask closePanel={closeDrawer} taskData={selectedTask} />
      </Box>
      <Grid container spacing={2}>
        {[
          {
            task: "dddfddf",
            subject: "aaaaaaaaa",
            fromdate: "sdeee",
            todate: "sdefe",
            desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          },
        ].map((selectedRow) => (
          <Grid item md={4} sm={8} xs={12}>
            <div onClick={() => openDrawer(selectedRow)}>
              <Card />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllTasks;
