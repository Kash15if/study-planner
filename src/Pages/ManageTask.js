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
  const [subjectsList, setSubjectsList] = useState(null);

  const [allData, setAllData] = useState(null);
  const [actualAllTask, setActualAllTask] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL_GET + "/allsubject")
      .then((res) => res.json())
      .then((dataX) => {
        setSubjectsList(dataX);
      });
  }, []);

  useEffect(() => {
    getAllTaskFromDb();
  }, []);

  const getAllTaskFromDb = async () => {
    await fetch(process.env.REACT_APP_BASE_URL_GET + "/alltask")
      .then((res) => res.json())
      .then((dataX) => {
        setAllData(dataX);
        setActualAllTask(dataX);
      });
  };

  const handleChange = (event) => {
    const data = event.target.value;

    if (data) {
      if (data.subject) {
        const { id, subject } = data;

        const _filteredTasks = actualAllTask.filter((item) => {
          return item.subject === subject;
        });

        setAllData(_filteredTasks);
      } else {
        const _filteredTasks = allData.filter((item) => {
          return item.task.includes(data);
        });

        setAllData(_filteredTasks);
      }
    } else {
      setAllData(actualAllTask);
    }
  };

  const handleClickOpen = (data) => {
    console.log(data);
    setSelectedTask(data);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedTask(null);
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

  const UpdateTaskToDb = async () => {
    console.log(selectedTask);
    //data to be pushed on db

    const response = await fetch(
      process.env.REACT_APP_BASE_URL_POST + "/updatetask",
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          taskDets: selectedTask,
        }), // body data type must match "Content-Type" header
      }
    );

    if (response.status === 200) {
      await getAllTaskFromDb();
      await setOpen(false);
      await setSelectedTask(null);
    }
    console.log(response);
    return response;
  };

  const deleteTask = async () => {
    console.log(selectedTask.taskid);

    const response = await fetch(
      process.env.REACT_APP_BASE_URL_POST + "/deltask",
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          taskDets: selectedTask,
        }), // body data type must match "Content-Type" header
      }
    );

    if (response.status === 200) {
      await getAllTaskFromDb();
      await setOpen(false);
      await setSelectedTask(null);
    }
    console.log(response);
    return response;
  };

  const onTaskTextChange = () => {};

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
            {selectedTask ? (
              <ManageTaskForm
                subjectsList={subjectsList}
                task={selectedTask}
                setTask={setSelectedTask}
                addTaskToDb={UpdateTaskToDb}
                DeleteTaskBtn={deleteTask}
                manage={true}
              />
            ) : (
              "Task Loading"
            )}
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

        <Grid item xs={12} md={3} sm={5}>
          <TextField
            id="outlined-basic"
            label="Search Task"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      {/* search box code ends and Task component started */}

      {!selectedTask && (
        <Grid container spacing={1} justifyContent="space-around" mt={2}>
          {allData &&
            allData.map((selectedRow) => (
              <Grid item xs={12} md={4} sm={6} key={selectedRow.taskid}>
                <div onClick={() => handleClickOpen(selectedRow)}>
                  <ManageTaskCard taskData={selectedRow} />
                </div>
              </Grid>
            ))}
        </Grid>
      )}

      {/* <CreateNewTask subjectsList={}
  task={selectedTask}
  setTask={}
  addTaskToDb={}
/> */}
    </div>
  );
};

export default ManageTask;
