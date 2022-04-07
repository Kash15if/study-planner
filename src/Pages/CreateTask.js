import CreateTask from "../Components/CreateTaskForm";
import EditableTable from "../CustomComponents/EditableTable";
import SubTaskTable from "../CustomComponents/CRUD-pr-table";
import { Grid } from "@mui/material";

const CreateNewTask = () => {
  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={10} xs={12}>
          <CreateTask />
        </Grid>

        <Grid item md={10} xs={12} sx={{ width: "90vw" }}>
          <SubTaskTable />
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateNewTask;
