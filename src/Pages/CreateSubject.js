import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import SubjectTable from "../CustomComponents/EditableTable";
import { Grid } from "@mui/material";

const CreateSubject = () => {
  return (
    <div>
      <Grid
        container
        spacing={5}
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ marginBottom: "5rem" }}
      >
        <Grid item md={3} sm={12}>
          <TextField id="outlined-basic" label="Subject" variant="outlined" />
        </Grid>

        <Grid item md={2} sm={12}>
          <Button variant="contained" size="large">
            Add Subject
          </Button>
        </Grid>
      </Grid>
      <SubjectTable />
    </div>
  );
};

export default CreateSubject;
