import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import SubjectTable from "../Components/SubjectTable";
import { Grid } from "@mui/material";
import { useState } from "react";

const CreateSubject = () => {
  const [formData, setFormData] = useState({
    subject: "",
    date: "",
  });

  const handleFormEdit = (val) => {
    console.log(val);
    setFormData(val);
  };
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
          <TextField
            id="outlined-basic"
            label="Subject"
            variant="outlined"
            value={formData.subject}
          />
        </Grid>

        <Grid item md={2} sm={12}>
          <Button variant="contained" size="large">
            Add Subject
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={5}
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ marginBottom: "5rem" }}
      >
        <Grid item md={8} sm={12}>
          <SubjectTable handleEdit={handleFormEdit} />
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateSubject;
