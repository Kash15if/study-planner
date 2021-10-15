import CreateTask from "../Components/CreateTaskForm";
import EditableTable from "../CustomComponents/EditableTable";
import { Grid } from "@mui/material";

const CreateNewTask = () => {
  return (
    <div>
      <CreateTask />

      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={8} xs={12}>
          <EditableTable />
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateNewTask;
