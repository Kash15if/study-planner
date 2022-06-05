import Card from "../CustomComponents/TaskCard";
import { Grid } from "@mui/material";
import CardPanTask from "../Components/SideDrawerTask";
import { useState, useEffect } from "react";

import { Box } from "@mui/material";
const AllTasks = () => {
  const [opener, setOpener] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [allData, setAllData] = useState("");

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL_GET + "/alltask")
      .then((res) => res.json())
      .then((dataX) => {
        setAllData(dataX);
      });
  }, []);

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
        {
          /* {[
          {
            task: "1st Task",
            subject: "1st Subject",
            fromdate: "2022-02-10",
            todate: "2022-04-22",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            task: "2nd task",
            subject: "2nd subject",
            fromdate: "2022-03-01",
            todate: "2022-03-01",
            desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          },
          {
            task: "some task",
            subject: "1st Subject",
            fromdate: "2022-03-10",
            todate: "2022-03-19",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          },
          {
            task: "some task",
            subject: "1st Subject",
            fromdate: "2022-03-10",
            todate: "2022-03-19",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          },
        ]*/
          allData &&
            allData.map((selectedRow) => (
              <Grid item md={4} sm={8} xs={12}>
                <div onClick={() => openDrawer(selectedRow)}>
                  <Card taskData={selectedRow} />
                </div>
              </Grid>
            ))
        }
      </Grid>
    </div>
  );
};

export default AllTasks;
