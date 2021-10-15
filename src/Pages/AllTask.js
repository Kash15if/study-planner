import Card from "../CustomComponents/TaskCard";
import { Grid } from "@mui/material";
import CardPanTask from "../Components/SideDrawerTask";
import { useState } from "react";

const AllTasks = () => {
  const [opener, setOpener] = useState(false);

  const openDrawer = () => {
    setOpener(true);
    console.log(opener);
  };

  return (
    <div>
      <CardPanTask
        opener={opener}
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          setOpener(false);
        }}
      />
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
