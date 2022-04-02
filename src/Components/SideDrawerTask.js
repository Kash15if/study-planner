import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { Grid } from "@mui/material";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

import SortableTable from "../CustomComponents/SortableTable";

import "../CSS/taskDets.css";

// import CretateTask from "../Pages/CreateTask";

const DrawerTask = (props) => {
  const [task, setTask] = useState(null);
  const [state, setState] = useState(null);

  const closeSidePanel = props.closePanel;

  console.log(props.taskData);

  useEffect(() => {
    setState(props.opener);
  }, [props.opener]);

  useEffect(() => {
    setTask(props.taskData);
  }, [props.taskData]);

  const closePanel = () => {
    closeSidePanel();

    console.log("opener");
  };

  const columns = [
    { field: "id", hide: true },
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

  const rows = [
    { id: 1, subtask: "Snow", desc: "Jon", link: 35, comp: true },
    { id: 2, subtask: "Snow", desc: "dvdddd dfd fefe", link: 35, comp: true },
    {
      id: 3,
      subtask: "Snow",
      desc: "fe fefe feads fvdvxczx axzc",
      link: 35,
      comp: false,
    },
    {
      id: 4,
      subtask: "Snow",
      desc: "scse vrf xz vfap lad l ",
      link: 35,
      comp: true,
    },

    {
      id: 5,
      subtask: "",
      desc: "scse vrf xz vfap lad l ",
      link: 35,
      comp: true,
    },

    {
      id: 56,
      subtask: "",
      desc: "scse vrf xz vfap lad l ",
      link: 35,
      comp: true,
    },

    {
      id: 7,
      subtask: "",
      desc: "scse vrf xz vfap lad l ",
      link: 35,
      comp: true,
    },

    {
      id: 8,
      subtask: "",
      desc: "scse vrf xz vfap lad l ",
      link: 35,
      comp: true,
    },

    {
      id: 9,
      subtask: "",
      desc: "scse vrf xz vfap lad l ",
      link: 35,
      comp: true,
    },

    {
      id: 10,
      subtask: "",
      desc: "scse vrf xz vfap lad l ",
      link: 35,
      comp: true,
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
        {task && (
          <table>
            <tr>
              <th>Subject:</th>
              <td>{task.subject}</td>
            </tr>
            <tr>
              <th>Task:</th>
              <td>{task.task}</td>
            </tr>
            <tr>
              <th>Description:</th>
              <td>{task.desc}</td>
            </tr>
            <tr>
              <th>Start Date:</th>
              <td>{task.fromdate}</td>
            </tr>

            <tr>
              <th>End Date:</th>
              <td>{task.todate}</td>
            </tr>
          </table>
        )}
        <div style={{ marginTop: "3rem" }}>
          <SortableTable rows={rows} columns={columns} idName="id" />
        </div>
      </Box>
    </div>
  );
};

export default DrawerTask;
