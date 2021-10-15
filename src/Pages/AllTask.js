import Card from "../CustomComponents/TaskCard";
import { Grid } from "@mui/material";
const AllTasks = () => {
  return (
    <div>
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <Grid item md={4} sm={8} xs={10}>
            <Card />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllTasks;
