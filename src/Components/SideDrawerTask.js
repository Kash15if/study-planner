import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";

import SortableTable from "../CustomComponents/SortableTable";

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
      {" "}
      <Box sx={{ height: "auto" }}>
        <Grid
          container
          spacing={2}
          textAlign="left"
          justifyContent="space-around"
        >
          <Grid item md={4} sm={8} xs={10}>
            Subject:- {task.subject}
          </Grid>

          <Grid item md={4} sm={8} xs={10}>
            Task:- {task.task}
          </Grid>

          <Grid item md={10} sm={10} xs={10}>
            Description:- {task.desc}
          </Grid>

          <Grid item xs={4}>
            Start Date:- {task.fromdate}
          </Grid>

          <Grid item xs={4}>
            End Date:- {task.todate}
          </Grid>
        </Grid>

        <SortableTable rows={rows} columns={columns} idName="id" />
      </Box>
    </div>
  );
};

export default DrawerTask;
