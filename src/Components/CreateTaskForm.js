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
import { Typography } from "@mui/material";

export default function HelperTextMisaligned() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(age);
  };

  return (
    <Box textAlign="left" pt={1}>
      <Grid container justifyContent="space-around" spacing={2}>
        <Grid item sm={7} xs={12}>
          <Typography variant="h5" mb={3}>
            Create New Task
          </Typography>
          <Grid container justifyContent="space-between" spacing={3.5}>
            <Grid item sm={6} xs={10}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-helper-label">
                  Age
                </InputLabel>
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
            <Grid item sm={6} xs={10}>
              <TextField
                fullWidth
                // helperText="Please enter your topic"
                id="demo-helper-text-misaligned"
                label="Topic"
                color="primary"
              />
            </Grid>

            <Grid item sm={12} xs={10}>
              <TextField
                id="outlined-basic"
                fullWidth
                label="Description"
                variant="outlined"
                color="primary"
              />
            </Grid>

            <Grid item sm={4} xs={10}>
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

            <Grid item sm={4} xs={10}>
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

            <Grid item sm={4} xs={10}></Grid>

            <Grid item sm={6} xs={10}>
              <Button variant="contained" component="span" size="large">
                Add
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={6} xs={12} mt={6} p={2}>
          <Grid container justifyContent="space-around">
            <Grid item sm={4} xs={8}>
              <Button variant="contained">Add subtasks +</Button>
            </Grid>
          </Grid>

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
        </Grid>
      </Grid>
    </Box>
  );
}
