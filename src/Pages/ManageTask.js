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

const ManageTask = () => {
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClickOpen = (data) => {
    setOpen(true);
    console.log(open);
    setSelectedTask(data);
    console.log(data);
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
            {selectedTask ? <CreateNewTask /> : "Task Loading"}
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
        {[
          {
            task: "1st Task",
            subject: "1st Subject",
            fromdate: "2022-02-10",
            todate: "2022-04-22",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            task: "2nd task",
            subject: "2nd subject",
            fromdate: "2022-03-01",
            todate: "2022-03-01",
            desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          },
          {
            task: "some task",
            subject: "1st Subject",
            fromdate: "2022-03-10",
            todate: "2022-03-19",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          },
          {
            task: "some task",
            subject: "1st Subject",
            fromdate: "2022-03-10",
            todate: "2022-03-19",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          },
        ].map((selectedRow) => (
          <Grid item xs={12} md={4} sm={6}>
            <div onClick={() => handleClickOpen(selectedRow)}>
              <ManageTaskCard taskData={selectedRow} />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ManageTask;
