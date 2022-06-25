import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Paper } from "@mui/material";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

import { Chart } from "react-google-charts";

// import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { useEffect, useState } from "react";
// import interactionPlugin from '@fullcalendar/interaction';

const Calender = ({ data }) => {
  const [calData, setCalData] = useState();

  useEffect(() => {
    let calDataTemp = data
      ? data.map((item) => {
          let fromDate = new Date(item.fromdate);
          let toDate = new Date(item.deadline);

          let tempValROw = [
            item.taskid,
            item.task,
            item.desc,
            new Date(
              fromDate.getFullYear(),
              fromDate.getMonth(),
              fromDate.getDate()
            ),
            new Date(toDate.getFullYear(), toDate.getMonth(), toDate.getDate()),
            null,
            item.precentComp,
            null,
          ];

          console.log(tempValROw);

          return tempValROw;
        })
      : [];

    setCalData(calDataTemp);
  }, [data]);

  const columns = [
    { type: "string", label: "Task ID" },
    { type: "string", label: "Task Name" },
    { type: "string", label: "Description" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" },
  ];

  const options = {
    height: 400,
    gantt: {
      trackHeight: 50,
    },
  };

  return calData && calData.length ? (
    <Paper>
      <div style={{ overflowX: "auto" }}>
        <Chart
          chartType="Gantt"
          width="100%"
          height="50%"
          data={[columns, ...calData]}
          options={options}
        />
        {/* <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={props.data}
        dateClick={handleDateClick}
      /> */}
      </div>
    </Paper>
  ) : (
    <div>No Cal Data</div>
  );
};

export default Calender;
