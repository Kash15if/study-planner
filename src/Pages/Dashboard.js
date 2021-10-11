import Cards from "../CustomComponents/DashboardCard";
import CalenderView from "../Components/CalenderView";
import TaskTable from "../CustomComponents/SortableTable";
import PieChart from "../CustomComponents/PieChart";
import { Grid } from "@mui/material";

const Dashboard = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Cards></Cards>
        </Grid>
        <Grid item xs={3}>
          <Cards></Cards>
        </Grid>
        <Grid item xs={3}>
          <Cards></Cards>
        </Grid>
        <Grid item xs={3}>
          <Cards></Cards>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={5}>
          <PieChart />
        </Grid>
        <Grid item xs={7}>
          <div style={{ width: "100%" }}>
            <CalenderView />
          </div>
        </Grid>
      </Grid>
      <div className="calenderSection">
        <TaskTable />
      </div>
    </div>
  );
};

export default Dashboard;
