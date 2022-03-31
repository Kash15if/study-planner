import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { Grid } from "@mui/material";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

import SortableTable from "../CustomComponents/SortableTable";

import "../CSS/taskDets.css";

// import CretateTask from "../Pages/CreateTask";

const DrawerTask = (props) => {
  const [state, setState] = useState(props.data);

  const closeSidePanel = props.closePanel;

  useEffect(() => {
    setState(props.opener);
  }, [props.opener]);

  let task = {
    task: "dddfddf",
    subject: "aaaaaaaaa",
    fromdate: "sdeee",
    todate: "sdefe",
    desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  };

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
      subtask: "Snow",
      desc: "scse vrf xz vfap lad l ",
      link: 35,
      comp: true,
    },

    {
      id: 56,
      subtask: "Snow",
      desc: "scse vrf xz vfap lad l ",
      link: 35,
      comp: true,
    },

    {
      id: 7,
      subtask: "Snow",
      desc: "scse vrf xz vfap lad l ",
      link: 35,
      comp: true,
    },

    {
      id: 8,
      subtask: "Snow",
      desc: "scse vrf xz vfap lad l ",
      link: 35,
      comp: true,
    },

    {
      id: 9,
      subtask: "Snow",
      desc: "scse vrf xz vfap lad l ",
      link: 35,
      comp: true,
    },

    {
      id: 10,
      subtask: "Snow",
      desc: "scse vrf xz vfap lad l ",
      link: 35,
      comp: true,
    },
  ];

  return (
    <div>
      <Box sx={{ padding: "1rem" }}>
        <Button
          sx={{
            position: "absolute",
            top: 0,
            right: "25px",
            fontSize: "36px",
            backgroundColor: "yellow",
          }}
          onClick={closePanel}
        >
          <CancelPresentationIcon fontSize="large" />
        </Button>
        <table>
          <tr>
            <th>Subject:</th>
            <td>Bill Gates</td>
          </tr>
          <tr>
            <th>Task:</th>
            <td>555 77 854</td>
          </tr>
          <tr>
            <th>Description:</th>
            <td>555 77 855</td>
          </tr>
          <tr>
            <th>Start Date:</th>
            <td>555 77 855</td>
          </tr>

          <tr>
            <th>End Date:</th>
            <td>555 77 855</td>
          </tr>
        </table>
        <div style={{ marginTop: "5rem" }}>
          <SortableTable rows={rows} columns={columns} idName="id" />
        </div>
      </Box>
    </div>
  );
};

export default DrawerTask;
