import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Paper } from "@mui/material";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

// import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
// import interactionPlugin from '@fullcalendar/interaction';

const Calender = (props) => {
  const handleDateClick = (arg) => {
    console.log(arg);
    // bind with an arrow function
    alert(arg.dateStr);
  };

  return (
    <Paper>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={props.data}
        dateClick={handleDateClick}
      />
    </Paper>
  );
};

export default Calender;
