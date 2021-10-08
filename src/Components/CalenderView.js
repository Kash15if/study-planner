import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Paper } from "@mui/material";

export default class DemoApp extends React.Component {
  render() {
    return (
      <Paper>
        <FullCalendar
          style={{ with: "100%" }}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={false}
          events={[
            { title: "event 1", date: "2021-10-01" },
            { title: "event 2", date: "2021-10-02" },
          ]}
        />
      </Paper>
    );
  }
}
