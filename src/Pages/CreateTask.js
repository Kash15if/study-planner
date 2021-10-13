import CreateTask from "../Components/CreateTaskForm";
import SubTaskAcc from "../CustomComponents/SubTasksAccordian";
import { Grid } from "@mui/material";

const CreateNewTask = () => {
  return (
    <div>
      <CreateTask />

      <Grid container justifyContent="space-around" spacing={1} mt={3}>
        <Grid item xs={12}>
          <SubTaskAcc />
        </Grid>
        <Grid item xs={12}>
          <SubTaskAcc />
        </Grid>
        <Grid item xs={12}>
          <SubTaskAcc />
        </Grid>
        <Grid item xs={12}>
          <SubTaskAcc />
        </Grid>
        <Grid item xs={12}>
          <SubTaskAcc />
        </Grid>
        <Grid item xs={12}>
          <SubTaskAcc />
        </Grid>
        <Grid item xs={12}>
          <SubTaskAcc />
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateNewTask;
