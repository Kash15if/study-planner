import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";

import SubTaskAcc from "../CustomComponents/SubTasksAccordian";

export default function HelperTextMisaligned() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(age);
  };

  return (
    <Box textAlign="left" p={6}>
      {/* <Grid container justifyContent="space-between" spacing={2}>
        <Grid item xs={7}> */}
      <Grid container justifyContent="space-between" spacing={3.5}>
        <Grid item sm={6} xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            // helperText="Please enter your topic"
            id="demo-helper-text-misaligned"
            label="Topic"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            fullWidth
            label="Description"
            variant="outlined"
          />
        </Grid>

        <Grid item sm={4} xs={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              label="Date mobile"
              inputFormat="MM/dd/yyyy"
              value={"2021-01-01"}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item sm={4} xs={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              label="Date mobile"
              inputFormat="MM/dd/yyyy"
              value={"2021-01-01"}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item sm={4} xs={12}></Grid>

        <Grid item sm={6} xs={12}>
          <Button variant="contained" component="span" size="large">
            Add
          </Button>
        </Grid>
      </Grid>

      {/* </Grid>

        <Grid item xs={5}></Grid>
      </Grid> */}

      <Grid container justifyContent="space-around" spacing={3.5} mt={10}>
        <Grid item sm={4} xs={12}>
          <Button variant="contained">Add subtasks +</Button>
        </Grid>
      </Grid>

      <Grid container justifyContent="space-around" spacing={1} mt={10}>
        <Grid item sm={6} xs={12}>
          <SubTaskAcc />
        </Grid>

        <Grid item sm={6} xs={12}>
          <SubTaskAcc />
        </Grid>

        <Grid item sm={6} xs={12}>
          <SubTaskAcc />
        </Grid>

        <Grid item sm={6} xs={12}>
          <SubTaskAcc />
        </Grid>
      </Grid>
    </Box>
  );
}
