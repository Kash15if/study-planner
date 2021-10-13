import Cards from "../CustomComponents/DashboardCard";
import CalenderView from "../Components/CalenderView";
import TaskTable from "../CustomComponents/SortableTable";
import PieChart from "../CustomComponents/PieChart";
import { Grid } from "@mui/material";

const Dashboard = () => {
  return (
    <div>
      <Grid container spacing={2} mb={5}>
        <Grid item sm={3} xs={12}>
          <Cards></Cards>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Cards></Cards>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Cards></Cards>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Cards></Cards>
        </Grid>
      </Grid>

      <Grid container spacing={2} mb={5}>
        <Grid item sm={5} xs={12}>
          <PieChart />
        </Grid>
        <Grid item sm={7} xs={12}>
          <CalenderView />
        </Grid>
      </Grid>

      <div style={{ display: "table", tableLayout: "fixed", width: "100%" }}>
        <TaskTable />
      </div>
    </div>
  );
};

export default Dashboard;
