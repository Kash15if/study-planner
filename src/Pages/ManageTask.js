import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

//import for dialog
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Table from "../CustomComponents/EditableTable";
import ManageTaskCard from "../Components/ManageTaskCard";
import CreateNewTask from "./CreateTask";
import ManageTaskForm from "../Components/CreateTaskForm";

const ManageTask = () => {
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const [allData, setAllData] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/get/alltask")
      .then((res) => res.json())
      .then((dataX) => {
        setAllData(dataX);
      });
  }, []);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClickOpen = (data) => {
    setSelectedTask(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      {/* Dialog popup for Managing Task */}
      <Dialog
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
        scroll={"body"}
        zIndex={100}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          {selectedTask ? selectedTask.task : "No Name Assigned"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {selectedTask ? <ManageTaskForm /> : "Task Loading"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
      {/* Dialog Popup ENds */}

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
        {allData &&
          allData.map((selectedRow) => (
            <Grid item xs={12} md={4} sm={6}>
              <div onClick={() => handleClickOpen(selectedRow)}>
                <ManageTaskCard taskData={selectedRow} />
              </div>
            </Grid>
          ))}
      </Grid>

      {/* <CreateNewTask subjectsList={}
  task={selectedTask}
  setTask={}
  addTaskToDb={}
/> */}
    </div>
  );
};

export default ManageTask;
