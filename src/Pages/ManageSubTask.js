import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import Autocomplete from "@mui/material/Autocomplete";

//import for dialog
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Table from "../CustomComponents/EditableTable";
import ManageTaskCard from "../Components/ManageTaskCard";
import DataTableCrudDemo from "../CustomComponents/CRUD-pr-table";
import CreateNewTask from "./CreateTask";
import ManageTaskForm from "../Components/CreateTaskForm";

const ManageTask = () => {
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const [allData, setAllData] = useState(null);
  const [dataForFilter, setDataForFilter] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/get/alltask")
      .then((res) => res.json())
      .then((dataX) => {
        const dataForFilter = dataX.map((items) => {
          return {
            label: items.task,
            id: items.taskid,
          };
        });

        setDataForFilter(dataForFilter);
        setAllData(dataX);
      });
  }, []);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClickOpen = (data) => {
    setOpen(true);
    console.log(open);
    setSelectedTask(data);
    console.log(data);
  };

  const setTaskSelect = (event, value) => {
    const _task = allData.filter((x) => {});
    console.log(value);
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
      <Grid container spacing={2} justifyContent="center" mb={8}>
        <Grid item xs={10} md={3} sm={5}>
          {" "}
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={dataForFilter}
            sx={{ width: 300 }}
            value={selectedTask}
            onChange={(event, value) => setTaskSelect(event, value)}
            renderInput={(params) => <TextField {...params} label="Task" />}
          />
        </Grid>
      </Grid>

      {/* search box code ends and Task component started */}

      <Grid container spacing={1} justifyContent="space-around" mt={2}></Grid>

      {selectedTask && <DataTableCrudDemo />}
    </div>
  );
};

export default ManageTask;
