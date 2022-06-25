import Cards from "../CustomComponents/DashboardCard";
import CalenderView from "../Components/CalenderView";
import TaskTable from "../CustomComponents/SortableTable";
import PieChart from "../CustomComponents/PieChart";
import { Grid } from "@mui/material";

import { useState, useEffect } from "react";

const Dashboard = () => {
  const [pieData, setPieData] = useState("");
  const [allData, setAllData] = useState("");
  const [calenderData, setCalenderData] = useState("");

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL_GET + "/alltask")
      .then((res) => res.json())
      .then((dataX) => {
        console.log(dataX);
        setAllData(dataX);

        let comp = 0;
        let due = 0;
        let notSt = 0;
        let inProg = 0;
        let calData = [];

        dataX.forEach((element) => {
          calData.push(element);
          if (element.completed) {
            comp++;
          } else {
            if (Date.parse(element.deadline) < Date.now()) {
              due++;
            } else {
              if (element.precentComp === 0) notSt++;
              else inProg++;
            }
          }
        });

        setPieData([comp, inProg, due, notSt]);
        setCalenderData([...calData]);
        console.log(calData);
      });
  }, []);
  return (
    <div>
      {pieData && (
        <Grid container spacing={2} mb={5}>
          <Grid item sm={3} xs={12}>
            <Cards
              color="#00E676"
              data={{ num: pieData[0] || 0, label: "Completed" }}
            ></Cards>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Cards
              color="#29B6F6"
              data={{ num: pieData[1] || 0, label: "In progress" }}
            ></Cards>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Cards
              color="#F50057"
              data={{ num: pieData[2], label: "Due" }}
            ></Cards>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Cards
              color="#FBC02D"
              data={{ num: pieData[3], label: "Not Started" }}
            ></Cards>
          </Grid>
        </Grid>
      )}

      <Grid container spacing={2} mb={5}>
        <Grid item sm={5} xs={12}>
          <PieChart
            data={[
              ["Task", "Value"],
              ["Completed", pieData[0]],
              ["In progress", pieData[1]],
              ["Pending", pieData[2]],
              ["Not Started", pieData[3]],
            ]}
            title="My Daily Activities"
          />
        </Grid>
        <Grid item sm={7} xs={12}>
          <CalenderView
            data={calenderData}
            //   [
            //   { title: "event 1", date: "2021-10-01" },
            //   { title: "event 2", date: "2021-10-10" },
            //   { title: "event 3", date: "2021-10-16" },
            //   { title: "event 4", date: "2021-10-17" },
            //   { title: "event 5", date: "2021-10-25" },
            // ]
          />
        </Grid>
      </Grid>

      <div style={{ display: "table", tableLayout: "fixed", width: "100%" }}>
        {allData && (
          <TaskTable
            idName="taskid"
            columns={[
              { field: "taskid", hide: true },
              { field: "task", headerName: "Task", flex: 1, minWidth: 200 },
              {
                field: "subject",
                headerName: "Subject",
                flex: 1,
                minWidth: 200,
              },
              {
                field: "desc",
                headerName: "Description",
                flex: 1,
                minWidth: 200,
              },
              {
                field: "deadline",
                headerName: "Deadline",
                flex: 1,
                minWidth: 200,
              },
              {
                field: "completed",
                headerName: "Completed",
                description: "Task has been completed or not.",
                flex: 1,
                minWidth: 200,
              },
              {
                field: "precentComp",
                headerName: "Precentage Completed",
                flex: 1,
                minWidth: 200,
              },
            ]}
            rows={allData}
            // {
            //   [
            //   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
            //   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
            //   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
            //   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
            //   {
            //     id: 5,
            //     lastName: "Targaryen",
            //     firstName: "Daenerys",
            //     age: null,
            //   },
            //   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
            //   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
            //   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
            //   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
            // ]}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
