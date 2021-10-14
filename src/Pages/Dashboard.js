import Cards from "../CustomComponents/DashboardCard";
import CalenderView from "../Components/CalenderView";
import TaskTable from "../CustomComponents/SortableTable";
import PieChart from "../CustomComponents/PieChart";
import { Grid } from "@mui/material";

const Dashboard = () => {
  return (
    <div>
      <Grid container spacing={2} mb={5}>
        <Grid item sm={3} xs={12}>
          <Cards color="#00E676" data={{ num: 25, label: "Completed" }}></Cards>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Cards
            color="#29B6F6"
            data={{ num: 35, label: "In progress" }}
          ></Cards>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Cards color="#F50057" data={{ num: 19, label: "Due" }}></Cards>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Cards
            color="#FBC02D"
            data={{ num: 6, label: "Not Started" }}
          ></Cards>
        </Grid>
      </Grid>

      <Grid container spacing={2} mb={5}>
        <Grid item sm={5} xs={12}>
          <PieChart
            data={[
              ["Task", "Value"],
              ["Completed", 10],
              ["Not Started", 5],
              ["In progress", 16],
              ["Pending", 9],
            ]}
            title="My Daily Activities"
          />
        </Grid>
        <Grid item sm={7} xs={12}>
          <CalenderView
            data={[
              { title: "event 1", date: "2021-10-01" },
              { title: "event 2", date: "2021-10-10" },
              { title: "event 3", date: "2021-10-16" },
              { title: "event 4", date: "2021-10-17" },
              { title: "event 5", date: "2021-10-25" },
            ]}
          />
        </Grid>
      </Grid>

      <div style={{ display: "table", tableLayout: "fixed", width: "100%" }}>
        <TaskTable
          columns={[
            { field: "id", headerName: "ID", flex: 1, minWidth: 200 },
            {
              field: "firstName",
              headerName: "First name",
              flex: 1,
              minWidth: 200,
              editable: true,
            },
            {
              field: "lastName",
              headerName: "Last name",
              flex: 1,
              minWidth: 200,
              editable: true,
            },
            {
              field: "age",
              headerName: "Age",
              type: "number",
              flex: 1,
              minWidth: 200,
              editable: true,
            },
            {
              field: "fullName",
              headerName: "Full name",
              description:
                "This column has a value getter and is not sortable.",
              sortable: false,
              flex: 1,
              minWidth: 200,
              valueGetter: (params) =>
                `${params.getValue(params.id, "firstName") || ""} ${
                  params.getValue(params.id, "lastName") || ""
                }`,
            },
          ]}
          rows={[
            { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
            { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
            { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
            { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
            { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
            { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
            { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
            { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
            { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
          ]}
        />
      </div>
    </div>
  );
};

export default Dashboard;
