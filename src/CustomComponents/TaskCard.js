import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";

import { Knob } from "primereact/knob";
import { useEffect, useState } from "react";

export default function RecipeReviewCard(props) {
  const [value2, setValue2] = useState(50);
  const [task, setTask] = useState(null);

  useEffect(() => {
    setTask(props.taskData);
    console.log(props.taskData);
  }, [props.taskData]);

  return (
    task && (
      <Card fullwidth>
        <CardHeader
          // avatar={
          //   <Avatar sx={{ bgcolor: "#03DAC6" }} aria-label="recipe">
          //     R
          //   </Avatar>
          // }
          title={<Typography color="secondary">{task.subject}</Typography>}
          subheader={<Typography color="secondary">{task.deadline}</Typography>}
        />

        <CardContent>
          <div>
            <Knob
              value={task.precentComp}
              readOnly
              valueColor={"rgb(3, 218, 200)"}
            />
          </div>
          <Typography color="secondary" variant="h6">
            {task.task}
          </Typography>
          <Typography variant="body2" color="secondary">
            {task.desc}
          </Typography>
        </CardContent>
      </Card>
    )
  );
}
