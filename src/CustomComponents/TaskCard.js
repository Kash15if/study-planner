import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  title: {
    color: "#03DAC6",
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        className={classes.title}
        avatar={
          <Avatar sx={{ bgcolor: "#03DAC6" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton color="secondary" aria-label="settings">
            <EditIcon />
          </IconButton>
        }
        title="Front-End"
        subheader="September 14, 2016"
      />

      <CardContent>
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
