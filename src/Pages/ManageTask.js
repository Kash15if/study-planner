import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import Table from "../CustomComponents/EditableTable";
import ManageTaskCard from "../Components/ManageTaskCard";

const ManageTask = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Grid container spacing={2} justifyContent="center" mb={8}>
        <Grid item xs={10} md={3} sm={5}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Subject</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Subject"
              onChange={handleChange}
            >
              <MenuItem value={"s1"}>S1</MenuItem>
              <MenuItem value={"s2"}>S2</MenuItem>
              <MenuItem value={"s3"}>S3</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={3} sm={5}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
      </Grid>

      {/* search box code ends and Task component started */}

      <Grid container spacing={1} justifyContent="space-around" mt={2}>
        <Grid item xs={12} md={4} sm={6}>
          <ManageTaskCard />
        </Grid>

        <Grid item xs={12} md={4} sm={6}>
          <ManageTaskCard />
        </Grid>

        <Grid item xs={12} md={4} sm={6}>
          <ManageTaskCard />
        </Grid>

        <Grid item xs={12} md={4} sm={6}>
          <ManageTaskCard />
        </Grid>

        <Grid item xs={12} md={4} sm={6}>
          <ManageTaskCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default ManageTask;
