import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { Grid } from "@mui/material";

import SortableTable from "../CustomComponents/SortableTable";

import "../CSS/taskDets.css";

// import CretateTask from "../Pages/CreateTask";

const DrawerTask = (props) => {
  const [state, setState] = useState(props.data);

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

  const columns = [
    { field: "id", hide: true },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <div>
      <Box sx={{ height: "auto", padding: "1rem" }}>
        <Button
          sx={{
            position: "absolute",
            top: 0,
            right: "25px",
            fontSize: "36px",
            backgroundColor: "yellow",
          }}
        >
          close
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
