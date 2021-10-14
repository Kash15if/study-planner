import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Paper } from "@mui/material";

const Calender = (props) => {
  return (
    <Paper>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={props.data}
      />
    </Paper>
  );
};

export default Calender;
