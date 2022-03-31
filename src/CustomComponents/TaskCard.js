import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";

import { Knob } from "primereact/knob";
import { useState } from "react";

export default function RecipeReviewCard() {
  const [value2, setValue2] = useState(50);

  return (
    <Card fullwidth>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#03DAC6" }} aria-label="recipe">
            R
          </Avatar>
        }
        title={<Typography color="secondary">Front ENd</Typography>}
        subheader={
          <Typography color="secondary">September 14, 2016</Typography>
        }
      />

      <CardContent>
        <div>
          <Knob value={value2} readOnly valueColor={"rgb(3, 218, 200)"} />
        </div>
        <Typography color="secondary" variant="h6">
          Node JS
        </Typography>
        <Typography variant="body2" color="secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
}
