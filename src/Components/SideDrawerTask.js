import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { Grid } from "@mui/material";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

import SortableTable from "../CustomComponents/SortableTable";

import "../CSS/taskDets.css";

// import CretateTask from "../Pages/CreateTask";

const DrawerTask = (props) => {
  const [state, setState] = useState([null]);
  const [subTasks, setSubTasks] = useState([]);

  const closeSidePanel = props.closePanel;

  console.log(props.taskData);

  useEffect(() => {
    setState(props.opener);
  }, [props.opener]);

  useEffect(() => {
    if (props.taskData) {
      const taskid = props.taskData.taskid;
      const urlSTs = "http://localhost:3000/get/onetask/" + taskid;

      fetch(urlSTs)
        .then((res) => res.json())
        .then((dataX) => {
          console.log(dataX.subTasks);
          setSubTasks(dataX.subTasks);
        });
    }
  }, [props.taskData]);
  const closePanel = () => {
    closeSidePanel();

    console.log("opener");
  };

  const columns = [
    { field: "subtaskid", hide: true },
    {
      field: "subtask",
      headerName: "SubTask",
      minWidth: 150,
      flex: 1,
      editable: true,
    },
    {
      field: "desc",
      headerName: "Description",
      minWidth: 150,
      flex: 1,
      editable: true,
    },
    {
      field: "link",
      headerName: "URL",
      type: "number",
      minWidth: 150,
      flex: 1,
      editable: true,
    },
    {
      field: "comp",
      headerName: "Completed",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      flex: 1,
      minWidth: 150,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  return (
    <div>
      <Box sx={{ padding: "1rem", height: "90vh" }}>
        <Button
          sx={{
            position: "absolute",
            top: 0,
            right: "25px",
            fontSize: "30px",
            backgroundColor: "yellow",
          }}
          onClick={closePanel}
        >
          <CancelPresentationIcon fontSize="large" />
        </Button>
        {props.taskData && (
          <table>
            <tr>
              <th>Subject:</th>
              <td>{props.taskData.subject}</td>
            </tr>
            <tr>
              <th>Task:</th>
              <td>{props.taskData.task}</td>
            </tr>
            <tr>
              <th>Description:</th>
              <td>{props.taskData.desc}</td>
            </tr>
            <tr>
              <th>Start Date:</th>
              <td>{props.taskData.fromdate}</td>
            </tr>

            <tr>
              <th>End Date:</th>
              <td>{props.taskData.deadline}</td>
            </tr>
          </table>
        )}
        <div style={{ marginTop: "3rem" }}>
          <SortableTable rows={subTasks} columns={columns} idName="subtaskid" />
        </div>
      </Box>
    </div>
  );
};

export default DrawerTask;
