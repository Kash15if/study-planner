import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

import SubTaskAcc from "../CustomComponents/SubTasksAccordian";
import { constrainPoint } from "@fullcalendar/react";

export default function NewTaskForm({
  subjectsList,
  task,
  setTask,
  addTaskToDb,
  DeleteTaskBtn,
  manage,
}) {
  const onInputChange = (e) => {
    var { id, value } = e.target;

    let _task = {
      ...task,
      [id]: value,
    };

    setTask(_task);
  };

  // const onSelectChange = (e) => {
  //   const { name, value } = e.target;

  //   let _task = {
  //     ...task,
  //     [name]: value,
  //   };

  //   setTask(_task);
  // };

  const onSelectChange = (e) => {
    const dataSelected = e.target.value;

    const { id, subject } = dataSelected;

    let _task = {
      ...task,
      subid: id,
      subject: subject,
    };

    setTask(_task);
  };

  const onFromDateChange = (e) => {
    let d = new Date(e);
    let date = d.toLocaleDateString();

    let _task = {
      ...task,
      fromdate: date,
    };

    setTask(_task);
  };
  const onToDateChange = (e) => {
    let d = new Date(e);
    let date = d.toLocaleDateString();

    let _task = {
      ...task,
      todate: date,
    };

    setTask(_task);
  };

  const AddTaskBtn = () => {
    addTaskToDb();
  };

  return (
    <Box textAlign="left" p={6}>
      {/* <Grid container justifyContent="space-between" spacing={2}>
        <Grid item xs={7}> */}
      <Grid container justifyContent="space-between" spacing={3.5}>
        <Grid item sm={6} xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-helper-label">
              Subject
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Subject"
              name="subject"
              onChange={onSelectChange}
            >
              <MenuItem value={null}>
                <em>None</em>
              </MenuItem>
              {subjectsList &&
                subjectsList.map((item) => {
                  return (
                    <MenuItem key={item.id} value={item}>
                      {item.subject}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            // helperText="Please enter your topic"
            id="task"
            label="Task"
            defaultValue={manage ? task.task : ""}
            onChange={onInputChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="description"
            fullWidth
            defaultValue={manage ? task.desc : ""}
            label="Description"
            variant="outlined"
            onChange={onInputChange}
          />
        </Grid>

        <Grid item sm={4} xs={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="From Date"
              inputFormat="yyyy/MM/dd"
              minDate={new Date("2017-01-01")}
              value={task.fromdate || new Date()}
              onChange={onFromDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item sm={4} xs={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="To Date"
              inputFormat="yyyy/MM/dd"
              minDate={new Date("2017-01-01")}
              value={task.deadline || new Date()}
              onChange={onToDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item sm={4} xs={12}></Grid>

        <Grid item sm={6} xs={12}>
          <Button
            variant="contained"
            component="span"
            size="large"
            onClick={AddTaskBtn}
          >
            {manage ? "Update" : "Add"}
          </Button>
        </Grid>
        {manage && (
          <Grid item xs={12}>
            <Button
              variant="contained"
              component="span"
              size="large"
              onClick={DeleteTaskBtn}
            >
              Delete
            </Button>
          </Grid>
        )}
      </Grid>

      {/* </Grid>
        <Grid item xs={5}></Grid>
      </Grid> */}

      {/* <Grid container justifyContent="space-around" spacing={3.5} mt={10}>
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
      </Grid> */}
    </Box>
  );
}
